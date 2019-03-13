import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import translate from '@redux-locale/translate';
import Container from '@components/container';
import PageTitle from '@components/page-title';

import styles from './About.module.scss';

function About({ t }) {
  return (
    <Container className={ styles.wrapper }>
      <PageTitle title={ t('about') } />
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