import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

class Button extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <button className={ styles.wrapper }>
        { children }
      </button>
    );
  }
}

Button.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Button;
