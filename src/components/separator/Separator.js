import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Separator.module.scss';

function Separator({ light }) {
  return (
    <hr className={classNames(styles.wrapper, { [styles.light]: light })} />
  );
}

Separator.propTypes = {
  light: PropTypes.bool,
};

Separator.defaultProps = {
  light: false,
};

export default Separator;
