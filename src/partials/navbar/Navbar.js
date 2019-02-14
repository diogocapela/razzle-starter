import React, { PureComponent } from 'react';

import Link from '@components/link';

import styles from './Navbar.module.scss';

class Navbar extends PureComponent {
  render() {
    return (
      <nav className={ styles.wrapper }>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/articles">Articles</Link>
            </li>
        </ul>
      </nav>
    );
  }
}

Navbar.propTypes = {

};

export default Navbar;
