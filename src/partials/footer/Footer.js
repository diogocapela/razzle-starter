import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import translate from '@redux-locale/translate';
import Container from '@components/container';

import styles from './Footer.module.scss';

function Footer({ t }) {
  return (
    <footer className={ styles.wrapper }>
      <Container>
        <span>{ t('all-rights-reserved') }</span>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

const enhance = compose(
  translate('partials.footer'),
);

export default enhance(Footer);
