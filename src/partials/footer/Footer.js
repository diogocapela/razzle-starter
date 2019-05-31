import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import {
  WEBSITE_NAME,
  WEBSITE_DESCRIPTION,
  SOCIAL_LINKS,
  FOOTER_LINKS,
  LOCALE_LINKS,
  LEGAL_LINKS,
} from '@config/settings';
import translate from '@redux-locale/translate';
import Container from '@components/container';
import Link from '@components/link';

import styles from './Footer.module.scss';

const renderLocaleLink = ({ slug, title }) => (
  <li key={slug} className={styles.link}>
    <Link title={title} toLocale={slug} keep>
      {title}
    </Link>
  </li>
);

const renderLink = ({ url, title, target }, index) => (
  <li key={index} className={styles.link}>
    <Link to={url} title={title} target={target}>
      {title}
    </Link>
  </li>
);

const renderIcon = ({ url, title, slug }, index) => (
  <li key={index}>
    <Link to={url} title={`${WEBSITE_NAME} on ${title}`} target="_blank">

    </Link>
  </li>
);

function Footer({ t }) {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.row}>
          <div>
            <Link to="/">
              <img className={styles.logo} src="/img/logo.png" alt={WEBSITE_NAME} />
            </Link>
            <p>{WEBSITE_DESCRIPTION}</p>
            <ul className={styles.socialIcons}>
              {SOCIAL_LINKS.map(renderIcon)}
            </ul>
          </div>
          <div>
            <h2 className={styles.listTitle}>Navigation</h2>
            <ul className={styles.links}>
              {FOOTER_LINKS.map(renderLink)}
            </ul>
          </div>
          <div>
            <h2 className={styles.listTitle}>Social</h2>
            <ul className={styles.links}>
              {SOCIAL_LINKS.map(renderLink)}
            </ul>
          </div>
        </div>
        <div className={styles.row}>
          <span>{`${WEBSITE_NAME} © ${new Date().getFullYear()} ${t('all-rights-reserved')}`}</span>
          <ul className={styles.links}>
            {LOCALE_LINKS.map(renderLocaleLink)}
          </ul>
          <ul className={styles.links}>
            {LEGAL_LINKS.map(renderLink)}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

const enhance = compose(
  translate('partials.footer'),
);

export default enhance(Footer);
