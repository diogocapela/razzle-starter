import React from 'react';

import Link from '@components/link';

import styles from './Navbar.module.scss';

import { NAVBAR_LINKS } from '@config/settings';

function Navbar() {
    return (
        <nav className={ styles.wrapper }>
            <ul>
                { NAVBAR_LINKS.map(({ to, text }) => (
                    <li key={ text }>
                        <Link to={ to }>{ text }</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

Navbar.propTypes = {

};

export default Navbar;
