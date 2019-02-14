import React, { PureComponent } from 'react';

import styles from './Textarea.module.scss';

class Textarea extends PureComponent {
  render() {
    return (
      <div className={ styles.wrapper }>
        <h1>Textarea</h1>
      </div>
    );
  }
}

Textarea.propTypes = {

};

export default Textarea;
