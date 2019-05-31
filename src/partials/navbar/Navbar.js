import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import {
    WEBSITE_NAME,
    NAVBAR_LINKS,
} from '@config/settings';
import translate from '@redux-locale/translate';
import Container from '@components/container';
import Link from '@components/link';

import styles from './Navbar.module.scss';

function Navbar({ t }) {
    return (
        <nav className={styles.wrapper}>
            <Container className={styles.container}>
                <Link to="/">
                    <img className={styles.logo} src="/img/logo.png" alt={WEBSITE_NAME} />
                </Link>
                <ul>
                    {NAVBAR_LINKS.map(({ url, slug }) => (
                        <li key={slug}>
                            <Link to={url}>{t(slug)}</Link>
                        </li>
                    ))}
                </ul>
            </Container>
        </nav>
    );
}

Navbar.propTypes = {
    t: PropTypes.func.isRequired,
};

const enhance = compose(
    translate('partials.navbar'),
);

export default enhance(Navbar);
