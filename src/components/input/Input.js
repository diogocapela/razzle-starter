import React, { PureComponent } from 'react';

import styles from './Input.module.scss';

class Input extends PureComponent {
  render() {
    return (
      <div className={ styles.wrapper }>
        <h1>Input</h1>
      </div>
    );
  }
}

Input.propTypes = {

};

export default Input;
