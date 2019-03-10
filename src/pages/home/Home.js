import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import translate from '@redux-locale/translate';
import Container from '@components/container';

import styles from './Home.module.scss';

function Home({ t }) {
  return (
    <Container className={ styles.wrapper }>
      <h1>{ t('hello-world') }</h1>
    </Container>
  );
}

Home.propTypes = {
  t: PropTypes.func.isRequired,
};

const enhance = compose(
  translate('pages.home'),
);

export default enhance(Home);