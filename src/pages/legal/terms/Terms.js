import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import translate from '@redux-locale/translate';
import Container from '@components/container';
import PageTitle from '@components/page-title';

import styles from './Terms.module.scss';

function Terms({ t }) {
  return (
    <Container className={ styles.wrapper }>
      <PageTitle title={ t('terms-of-service') } />
    </Container>
  );
}

Terms.propTypes = {
  t: PropTypes.func.isRequired,
};

const enhance = compose(
  translate('pages.legal'),
);

export default enhance(Terms);