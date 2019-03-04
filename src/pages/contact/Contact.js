import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import translate from '@redux-locale/translate';

import styles from './Contact.module.scss';

function Contact({ t }) {
  return (
    <main className={styles.wrapper}>
      <h1>{ t('contact') }</h1>
    </main>
  );
}

Contact.propTypes = {
  t: PropTypes.func.isRequired,
};

const enhance = compose(
  translate('pages.contact'),
);

export default enhance(Contact);