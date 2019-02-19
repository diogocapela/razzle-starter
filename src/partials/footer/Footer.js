import React from 'react';

import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={ styles.wrapper }>
      <span>This is the footer!</span>
    </footer>
  );
}

Footer.propTypes = {

};

export default Footer;
