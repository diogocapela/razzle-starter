import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { actions as localeActions } from '@redux-locale';
import translate from '@redux-locale/translate';
import { NAVBAR_LINKS } from '@config/settings';
import Link from '@components/link';

import styles from './Navbar.module.scss';

function Navbar({ languages, changeLanguage }) {
    return (
        <nav className={ styles.wrapper }>
            <ul>
                { NAVBAR_LINKS.map(({ to, text }) => (
                    <li key={ text }>
                        <Link to={ to }>{ text }</Link>
                    </li>
                ))}
                { languages.map((locale) => <button key={ locale } onClick={ () => changeLanguage(locale) }>{ locale }</button>) }
            </ul>
        </nav>
    );
}

Navbar.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    languages: state.locale.languages,
  }
};

const mapDispatchToProps = {
  changeLanguage: localeActions.changeLanguage,
};

const enhance = compose(
    translate('components.navbar'),
    connect(mapStateToProps, mapDispatchToProps),
);

export default enhance(Navbar);