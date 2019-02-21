import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { actions as localeActions } from '@redux-locale';

import translate from '../../redux/redux-locale/translate';

import styles from './Home.module.scss';

function Home({ t, changeLanguage, languages }) {
  const [count, setCount] = useState(0);
  const handleClick = () => {
      changeLanguage(languages[count % languages.length]);
      setCount((prev) => prev+1);
  }

  return (
    <main className={styles.wrapper}>
      <h1 onClick={ handleClick } >{ t('hello-world') }</h1>
    </main>
  );
}

Home.propTypes = {
  t: PropTypes.func.isRequired,
};

const mapDispatch = {
  changeLanguage: localeActions.changeLanguage,
};

const mapState = ({ locale: { languages } }) => ({
  languages,
});

const enhance = compose(
  translate('pages.home'),
  connect(mapState, mapDispatch),
);

export default enhance(Home);
