import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import translate from '@redux-locale/translate';
import Container from '@components/container';

import styles from './Contact.module.scss';

function Contact({ t }) {
  return (
    <Container className={styles.wrapper}>
      <h1>{ t('contact') }</h1>
    </Container>
  );
}

Contact.propTypes = {
  t: PropTypes.func.isRequired,
};

const enhance = compose(
  translate('pages.contact'),
);

export default enhance(Contact);