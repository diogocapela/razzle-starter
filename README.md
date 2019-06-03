# react-starter

[![Build Status][build-status-img]][build-status-url] [![Dependencies Status][dependencies-status-img]][dependencies-status-url] [![Dev Dependencies Status][dev-dependencies-status-img]][dev-dependencies-status-url]

[build-status-url]:https://travis-ci.org/diogocapela/react-starter
[build-status-img]:http://img.shields.io/travis/diogocapela/react-starter/master.svg
[dependencies-status-url]:https://david-dm.org/diogocapela/react-starter
[dependencies-status-img]:https://img.shields.io/david/diogocapela/react-starter.svg
[dev-dependencies-status-url]:https://david-dm.org/diogocapela/react-starter?type=dev
[dev-dependencies-status-img]:https://img.shields.io/david/dev/diogocapela/react-starter.svg

A boilerplate starter for server-side rendered React applications built with [Razzle](https://github.com/jaredpalmer/razzle).

**Live Demo:** [https://starter-react.herokuapp.com](https://starter-react.herokuapp.com)

## Project Structure

```
├── public
│   ├── img
│   ├── humans.txt
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── src
│   ├── api
│   ├── components
│   ├── config
│   ├── pages
│   ├── partials
│   ├── redux
│   ├── styles
│   ├── test
│   ├── App.js
│   ├── client.js
│   ├── index.js
│   └── server.js
├── .env
├── package.json
└── razzle.config.js
```

## OAuth Providers

- Battle<span />.net - https://develop.battle.net/access/clients
- Facebook
- GitHub
- Google - https://console.cloud.google.com/apis/credentials
- Instagram
- LinkedIn
- Pinterest
- Twitter - https://developer.twitter.com/en/apps

## Setup

```bash
# Get the latest snapshot
$ git clone https://github.com/diogocapela/react-starter.git

# Change directory
$ cd react-starter

# Install all the dependencies
$ npm i

# Start the development kit
$ npm run dev

# Build for production
$ npm run build

# Start the production server
$ npm run start
```

## Clean

```bash
# Deletes node_modules and package-lock.json
$ npm run clean
```

## Test

```bash
# Run all tests
$ npm run test
```

## Build Sitemap

```bash
# Builds a sitemap to /public/sitemap.xml
$ npm run build-sitemap
```

## Deploy

```bash
# Build project
$ npm run build

# Deploy
$ git push heroku master
```

## Utilities

- [React Developer Tools Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

## License

Open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
