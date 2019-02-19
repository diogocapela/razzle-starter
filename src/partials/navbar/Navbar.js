import React from 'react';

import Link from '@components/link';

import styles from './Navbar.module.scss';

const LINKS = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/contact", text: "Contact" },
    { to: "/articles", text: "Articles" },
];

function Navbar() {
    return (
        <nav className={ styles.wrapper }>
        <ul>
            { LINKS.map(({ to, text }) => <Link key={ text } to={ to }>{ text }</Link>) }
        </ul>
        </nav>
    );
}

Navbar.propTypes = {

};

export default Navbar;
