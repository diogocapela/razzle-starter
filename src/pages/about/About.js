import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import translate from '@redux-locale/translate';
import Container from '@components/container';

import styles from './About.module.scss';

function About({ t }) {
  return (
    <Container className={ styles.wrapper }>
      <h1>{ t('about') }</h1>
    </Container>
  );
}

About.propTypes = {
  t: PropTypes.func.isRequired,
};

const enhance = compose(
  translate('pages.about'),
);

export default enhance(About);