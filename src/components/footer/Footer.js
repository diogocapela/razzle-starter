import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import translate from '@redux-locale/translate';

import styles from './Footer.module.scss';

function Footer({ t }) {
  return (
    <footer className={ styles.wrapper }>
      <span>{ t('all-rights-reserved') }</span>
    </footer>
  );
}

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

const enhance = compose(
  translate('components.footer'),
);

export default enhance(Footer);
