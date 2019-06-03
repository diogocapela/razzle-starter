import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Reset Styles
import '@styles/normalize.scss';
import '@styles/reset.scss';

// Global Styles
import '@styles/medias.scss';
import '@styles/variables.scss';
import '@styles/keyframes.scss';
import '@styles/theme.scss';

// Partials
import Navbar from '@partials/navbar';
import Footer from '@partials/footer';
import CookieBanner from '@partials/cookie-banner';

// HOC
import onlyLoggedIn from '@partials/hoc/onlyLoggedIn';
import onlyLoggedOut from '@partials/hoc/onlyLoggedOut';

// Pages
import Home from '@pages/home';
import About from '@pages/about';
import Contact from '@pages/contact';
import Blog from '@pages/blog/articles';
import Article from '@pages/blog/article';
import Portfolio from '@pages/portfolio/projects';
import Project from '@pages/portfolio/project';
import Login from '@pages/auth/login';
import Profile from '@pages/auth/profile';
import CookiePolicy from '@pages/legal/cookie-policy';
import PrivacyPolicy from '@pages/legal/privacy-policy';
import TermsAndConditions from '@pages/legal/terms-and-conditions';

// App Styles
import styles from './App.module.scss';

function App() {
  return (
    <Fragment>
      <Navbar />
      <main className={styles.main}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog/:slug" component={Article} />
          <Route path="/blog" component={Blog} />
          <Route path="/portfolio/:slug" component={Project} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/login" component={onlyLoggedOut(Login)} />
          <Route path="/profile" component={onlyLoggedIn(Profile)} />
          <Route path="/legal/cookie-policy" component={CookiePolicy} />
          <Route path="/legal/privacy-policy" component={PrivacyPolicy} />
          <Route path="/legal/terms-and-conditions" component={TermsAndConditions} />
        </Switch>
      </main>
      <Footer />
      <CookieBanner />
    </Fragment>
  );
}

export default App;
