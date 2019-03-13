import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import translate from '@redux-locale/translate';
import Container from '@components/container';
import PageTitle from '@components/page-title';

import styles from './Contact.module.scss';

function Contact({ t }) {
  return (
    <Container className={styles.wrapper}>
      <PageTitle title={ t('contact') } />
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