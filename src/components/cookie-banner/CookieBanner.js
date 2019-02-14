import React, { PureComponent } from 'react';

import styles from './CookieBanner.module.scss';

class CookieBanner extends PureComponent {
  render() {
    return (
      <div className={ styles.wrapper }>
        <h1>Cookie Banner</h1>
      </div>
    );
  }
}

CookieBanner.propTypes = {

};

export default CookieBanner;
