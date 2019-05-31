/* eslint-disable import/prefer-default-export */
import projectsAPI from '@api/projects';
import * as actionTypes from './actionTypes';

export const loadProjects = () => (dispatch) => {
  dispatch({
    type: actionTypes.LOAD_PROJECTS_REQUEST,
  });

  try {
    dispatch({
      type: actionTypes.LOAD_PROJECTS_SUCCESS,
      payload: projectsAPI,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOAD_PROJECTS_ERROR,
      payload: error,
    });
  }
};
