import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import translate from '@redux-locale/translate';
import Container from '@components/container';
import PageTitle from '@components/page-title';
import OAuthLogin from '@components/oauth-login';
import socket from '@socket/client';

import styles from './Login.module.scss';

function Login({ t }) {
  return (
    <Container className={styles.wrapper}>
      <PageTitle title={ t('login') } />
      <OAuthLogin socket={socket} provider="bnet" />
      <br />
      <OAuthLogin socket={socket} provider="facebook" />
      <br />
      <OAuthLogin socket={socket} provider="github" />
      <br />
      <OAuthLogin socket={socket} provider="google" />
      <br />
      <OAuthLogin socket={socket} provider="instagram" />
      <br />
      <OAuthLogin socket={socket} provider="linkedin" />
      <br />
      <OAuthLogin socket={socket} provider="pinterest" />
      <br />
      <OAuthLogin socket={socket} provider="twitter" />
    </Container>
  );
}

Login.propTypes = {
  t: PropTypes.func.isRequired,
};

const enhance = compose(
  translate('pages.auth'),
);

export default enhance(Login);
