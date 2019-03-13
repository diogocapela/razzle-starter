import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import translate from '@redux-locale/translate';
import Container from '@components/container';
import PageTitle from '@components/page-title';

import styles from './Privacy.module.scss';

function Privacy({ t }) {
  return (
    <Container className={ styles.wrapper }>
      <PageTitle title={ t('privacy-policy') } />
    </Container>
  );
}

Privacy.propTypes = {
  t: PropTypes.func.isRequired,
};

const enhance = compose(
  translate('pages.legal'),
);

export default enhance(Privacy);