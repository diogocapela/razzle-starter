import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { actions as localeActions } from '@redux-locale';
import translate from '@redux-locale/translate';
import { NAVBAR_LINKS } from '@config/settings';
import Container from '@components/container';
import Link from '@components/link';

import styles from './Navbar.module.scss';

function Navbar({ t, languages, changeLanguage }) {
    return (
        <nav className={ styles.wrapper }>
            <Container>
              <ul>
                  { NAVBAR_LINKS.map(({ to, slug }) => (
                      <li key={ slug }>
                          <Link to={ to }>{ t(slug) }</Link>
                      </li>
                  ))}
                  { languages.map((locale) => <button key={ locale } onClick={ () => changeLanguage(locale) }>{ locale }</button>) }
              </ul>
            </Container>
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
    translate('partials.navbar'),
    connect(mapStateToProps, mapDispatchToProps),
);

export default enhance(Navbar);