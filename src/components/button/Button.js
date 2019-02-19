import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

function Button({ children }) {
  return (
    <button className={ styles.wrapper }>
      { children }
    </button>
  );
}

Button.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Button;
