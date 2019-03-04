import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import translate from '@redux-locale/translate';

import styles from './About.module.scss';

function About({ t }) {
  return (
    <main className={ styles.wrapper }>
      <h1>{ t('about') }</h1>
    </main>
  );
}

About.propTypes = {
  t: PropTypes.func.isRequired,
};

const enhance = compose(
  translate('pages.about'),
);

export default enhance(About);