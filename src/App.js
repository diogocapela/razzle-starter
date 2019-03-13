import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Global Reset
import '@styles/normalize.scss';
import '@styles/reset.scss';

// Global Styles
import '@styles/variables.scss';
import '@styles/theme.scss';

// Partials
import Navbar from '@partials/navbar';
import Footer from '@partials/footer';
import CookieBanner from '@partials/cookie-banner';

// Home
import HomePage from '@pages/home';
import AboutPage from '@pages/about';
import ContactPage from '@pages/contact';

// Blog
import BlogPage from '@pages/blog/articles';
import ArticlePage from '@pages/blog/article';

// Portfolio
import PortfolioPage from '@pages/portfolio/projects';
import ProjectPage from '@pages/portfolio/project';

// Legal
import PrivacyPage from '@pages/legal/privacy';
import TermsPage from '@pages/legal/terms';

// Storybook
import StorybookPage from '@pages/storybook';

// Styles
import styles from './App.module.scss';

function App() {
  return (
    <Fragment>
      <Navbar />
      <main className={styles.main}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/blog/:slug" component={ArticlePage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/portfolio/:slug" component={ProjectPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/legal/privacy" component={PrivacyPage} />
          <Route path="/legal/terms" component={TermsPage} />
          <Route path="/storybook" component={StorybookPage} />
        </Switch>
      </main>
      <Footer />
      <CookieBanner />
    </Fragment>
  );
}

export default App;
