/* eslint-disable import/prefer-default-export */
import Cookies from 'js-cookie';
import { OAUTH_COOKIE } from '@config/cookieTypes';
import * as actionTypes from './actionTypes';

export const login = user => (dispatch) => {
  dispatch({
    type: actionTypes.LOGIN,
    payload: user,
  });
};

export const logout = () => (dispatch) => {
  Cookies.remove(OAUTH_COOKIE);
  dispatch({
    type: actionTypes.LOGOUT,
  });
};
