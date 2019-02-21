import express from 'express';
import dotenv from 'dotenv';
import compression from 'compression';
import helmet from 'helmet';
import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { minify } from 'html-minifier';
import serialize from 'serialize-javascript';
import cookieParser from 'cookie-parser';
import fs from 'fs';
import { promisify } from 'util';

// App
import App from './App';

// Redux
import configureStore from '@redux/configureStore';
import articlesData from '@redux/api/articles';

// Cookie Types
import { SUBFOLDER_COOKIE } from '@config/cookieTypes';

dotenv.config();

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
const port = process.env.PORT || 3000;

server.set('port', port);
server.disable('x-powered-by');
server.use(express.static(process.env.RAZZLE_PUBLIC_DIR));
/* cookie-parser */
server.use(cookieParser());
/* compression */
server.use(compression());
/* helmet */
server.use(helmet());
server.use(helmet.noCache());

const {
  WEBSITE_NAME,
  WEBSITE_SLOGAN,
  WEBSITE_DESCRIPTION,
  WEBSITE_URL,
  WEBSITE_EMAIL,
  WEBSITE_PHONE,
  WEBSITE_KEYWORDS,
  WEBSITE_CITY,
  WEBSITE_COUNTRY,
  WEBSITE_TWITTER,
  GOOGLE_ANALYTICS,
  GOOGLE_TAG_MANAGER,
  DEFAULT_SUBFOLDER,
} = process.env;

server.get('*', async (req, res) => {

  let subfolder = req.cookies.subfolder;

  if (!subfolder) {
    res.cookie(SUBFOLDER_COOKIE, DEFAULT_SUBFOLDER);
    subfolder = DEFAULT_SUBFOLDER;
  }

  const readDir = promisify(fs.readdir);
  const readFile = promisify(fs.readFile);
  const language = JSON.parse(await readFile(`src/redux/api/languages/${subfolder}.json`, 'utf8'));
  const languageFiles = await readDir(`src/redux/api/languages`, 'utf8');
  const languages = languageFiles.map((fileName) => fileName.split('.')[0]);

  // Redux initial state

  const preloadedState = {
    articles: {
      result: articlesData
    },
    locale: {
      languages,
      language,
    },
  };

  // Create a new Redux store instance

  const store = configureStore(preloadedState);

  // Render the component to a string

  const context = {};
  const markup = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    </Provider>
  );

  // Grab the initial state from our Redux store

  const finalState = store.getState();

  // Set dynamic meta tags for SEO

  let locale = DEFAULT_SUBFOLDER.substring(0, 2);
  let pageDescription = WEBSITE_DESCRIPTION;
  let pageKeywords = WEBSITE_KEYWORDS;
  let pageThumbnail = '/img/thumbnail.jpg';
  let pageTitle = `${WEBSITE_NAME} — ${WEBSITE_SLOGAN}`;

  const pageTitlePerUrl = {
    '/about': `About | ${pageTitle}`,
    '/contect': `Contact | ${pageTitle}`,
    '/articles': `Articles | ${pageTitle}`
  };
  pageTitle = pageTitlePerUrl[req.originalUrl] || pageTitle;

  const html = `
    <!doctype html>
    <html lang="${locale}">
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <meta name="theme-color" content="#122222" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/img/favicon.ico" />

      <meta name="language" content="${locale}" />

      <title>${pageTitle}</title>
      <meta property="og:title" content="${pageTitle}" />
      <meta name="twitter:title" content="${pageTitle}" />
      <meta itemprop="name" content="${pageTitle}" />

      <meta name="description" content="${pageDescription}" />
      <meta name="summary" content="${pageDescription}" />
      <meta name="og:description" content="${pageDescription}" />
      <meta name="twitter:description" content="${pageDescription}" />
      <meta itemprop="description" content="${pageDescription}" />
      <meta name="subject" content="${pageDescription}" />
      <meta name="topic" content="${pageDescription}" />
      <meta name="abstract" content="${pageDescription}" />

      <meta name="og:image" content="${pageThumbnail}" />
      <meta name="twitter:image:src" content="${pageThumbnail}" />
      <meta itemprop="image" content="${pageThumbnail}" />

      <meta name="url" content="${WEBSITE_URL}${req.originalUrl}" />
      <meta name="og:url" content="${WEBSITE_URL}${req.originalUrl}" />
      <link rel="canonical" href="${WEBSITE_URL}${req.originalUrl}" />
      <link rel="shortlink" href="${WEBSITE_URL}${req.originalUrl}" />

      <meta name="author" content="${WEBSITE_NAME}" />
      <meta name="copyright" content="${WEBSITE_NAME}" />
      <meta name="designer" content="${WEBSITE_NAME}" />
      <meta name="owner" content="${WEBSITE_NAME}" />
      <meta name="og:site_name" content="${WEBSITE_NAME}" />

      <meta name="reply-to" content="${WEBSITE_EMAIL}" />
      <meta name="og:email" content="${WEBSITE_EMAIL}" />

      <meta property="og:phone_number" content="${WEBSITE_PHONE}" />

      <meta property="og:locality" content="${WEBSITE_CITY}" />
      <meta property="og:country-name" content="${WEBSITE_COUNTRY}" />

      <meta name="keywords" content="${pageKeywords}" />
      <meta name="robots" content="index, follow" />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:site" content="${WEBSITE_TWITTER}" />
      <meta name="twitter:creator" content="${WEBSITE_TWITTER}" />

      ${assets.client.css ? `<link rel="stylesheet" href="${assets.client.css}" />` : ''}
      ${process.env.NODE_ENV === 'production'
      ? `<script src="${assets.client.js}" defer></script>`
      : `<script src="${assets.client.js}" defer crossorigin></script>`}

      <script async src="https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS}"></script>
      <script>
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
  
          gtag('config', '${GOOGLE_ANALYTICS}');
      </script>

      <script>(function (w, d, s, l, i) {
          w[l] = w[l] || []; w[l].push({
              'gtm.start':
                  new Date().getTime(), event: 'gtm.js'
          }); var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                  'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', '${GOOGLE_TAG_MANAGER}');</script>

    </head>
    <body>
      <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER}" height="0" width="0" style="display:none;visibility:hidden"></iframe>
      </noscript>

      <div id="root">${markup}</div>

      <script>
        window.__PRELOADED_STATE__ = ${serialize(finalState)}
      </script>
    </body>
    </html>
  `;

  if (context.url) {
    res.redirect(context.url);
  } else {
    res.status(200).send(minify(html, {
      removeComments: true,
      collapseWhitespace: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    }));
  }

});

export default server;
