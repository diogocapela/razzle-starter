import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import get from 'lodash/get';
import translate from '@redux-locale/translate';
import { actions as oauthActions } from '@redux-oauth';
import Container from '@components/container';
import PageTitle from '@components/page-title';
import Button from '@components/button';

import styles from './Profile.module.scss';

function Profile({ t, name, photo, logout }) {
  const handleLogout = () => {
    logout();
  };

  return (
    <Container className={styles.wrapper}>
      <PageTitle title={t('profile')} />
      <h1>{name}</h1>
      <Button onClick={handleLogout}>Logout</Button>
      <br />
      <img src={photo} alt={name} />
    </Container>
  );
}

Profile.propTypes = {
  t: PropTypes.func.isRequired,
  name: PropTypes.string,
  photo: PropTypes.string,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  name: get(state, 'oauth.user.name'),
  photo: get(state, 'oauth.user.photo'),
});

const mapDispatchToProps = {
  logout: oauthActions.logout,
};

const enhance = compose(
  translate('pages.profile'),
  connect(mapStateToProps, mapDispatchToProps),
);

export default enhance(Profile);
