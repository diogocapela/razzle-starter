import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { actions as localeActions } from '@redux-locale';
import translate from '@redux-locale/translate';

import styles from './Home.module.scss';

function Home({ t, changeLanguage, languages }) {
  return (
    <main className={ styles.wrapper }>
      <h1>{ t('hello-world') }</h1>
      <br />
      { languages.map((locale) => <button key={ locale} onClick={ () => changeLanguage(locale) }>{ locale }</button>) }
    </main>
  );
}

Home.propTypes = {
  t: PropTypes.func.isRequired,
};

const mapState = ({ locale: { languages } }) => ({
  languages,
});

const mapDispatch = {
  changeLanguage: localeActions.changeLanguage,
};

const enhance = compose(
  translate('pages.home'),
  connect(mapState, mapDispatch),
);

export default enhance(Home);
