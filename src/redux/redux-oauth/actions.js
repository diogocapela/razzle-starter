/* eslint-disable import/prefer-default-export */
import * as actionTypes from './actionTypes';

export const login = user => (dispatch) => {
  dispatch({
    type: actionTypes.LOGIN,
    payload: user,
  });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: actionTypes.LOGOUT,
  });
};
