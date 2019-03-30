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
import Separator from '@components/separator';
import Icon from '@components/icon';
import Link from '@components/link';

import styles from './Footer.module.scss';

function Footer({ t }) {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.row}>
          <div>
            <img className={styles.logo} src="/img/logo-light.png" alt={WEBSITE_NAME} />
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
        <Separator light />
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

function renderLocaleLink({ slug, url, title }, index) {
  return (
    <li key={index} className={styles.link}>
      <Link title={title} toLocale={slug}>
        {title}
      </Link>
    </li>
  )
}

function renderLink({ url, title, target }, index) {
  return (
    <li key={index} className={styles.link}>
      <Link to={url} title={title} target={target}>
        {title}
      </Link>
    </li>
  )
}

function renderIcon({ url, title, slug }, index) {
  return (
    <li key={index}>
      <Link to={url} title={`${WEBSITE_NAME} on ${title}`} target="_blank">
        <Icon slug={slug} isBrand />
      </Link>
    </li>
  )
}

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

const enhance = compose(
  translate('partials.footer'),
);

export default enhance(Footer);
