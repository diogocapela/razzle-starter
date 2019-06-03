import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import {
    WEBSITE_NAME,
    NAVBAR_LINKS,
} from '@config/settings';
import translate from '@redux-locale/translate';
import Container from '@components/container';
import Link from '@components/link';

import styles from './Navbar.module.scss';

function Navbar({ t, isAuthenticated }) {
    const renderLink = ({ url, slug }) => (
        <li key={slug}>
            <Link to={url}>{t(slug)}</Link>
        </li>
    );

    return (
        <nav className={styles.wrapper}>
            <Container className={styles.container}>
                <Link to="/">
                    <img className={styles.logo} src="/img/logo.png" alt={WEBSITE_NAME} />
                </Link>
                <ul>
                    {NAVBAR_LINKS.map(renderLink)}
                    {isAuthenticated
                        ? <Fragment>
                            {renderLink({ url: 'profile', slug: 'profile' })}
                        </Fragment>
                        : <Fragment>
                            {renderLink({ url: 'login', slug: 'login' })}
                        </Fragment>
                    }
                </ul>
            </Container>
        </nav>
    );
}

Navbar.propTypes = {
    t: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    isAuthenticated: state.oauth.isAuthenticated,
});

const enhance = compose(
    translate('partials.navbar'),
    connect(mapStateToProps, null),
);

export default enhance(Navbar);
