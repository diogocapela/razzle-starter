import React, { PureComponent } from 'react';

import styles from './Footer.module.scss';

class Footer extends PureComponent {
  render() {
    return (
      <footer className={ styles.wrapper }>
        <span>This is the footer!</span>
      </footer>
    );
  }
}

Footer.propTypes = {

};

export default Footer;
