import * as actionTypes from './actionTypes';

import projectsAPI from '@api/projects';

export const loadProjects = () => (dispatch) => {
  dispatch({
    type: actionTypes.LOAD_PROJECTS_REQUEST,
  });

  try {
    dispatch({
      type: actionTypes.LOAD_PROJECTS_SUCCESS,
      payload: projectsAPI,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.LOAD_PROJECTS_ERROR,
      payload: error,
    });
  }
};
