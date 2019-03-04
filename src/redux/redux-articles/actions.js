import * as actionTypes from './actionTypes';

import articlesAPI from '@api/articles';

export const loadProjects = () => (dispatch) => {
  dispatch({
    type: actionTypes.LOAD_ARTICLES_REQUEST,
  });

  try {
    dispatch({
      type: actionTypes.LOAD_ARTICLES_SUCCESS,
      payload: articlesAPI,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.LOAD_ARTICLES_ERROR,
      payload: error,
    });
  }
};
