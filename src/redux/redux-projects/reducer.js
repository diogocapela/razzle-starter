import * as actionTypes from './actionTypes';

const initialState = {
    result: [],
    isLoading: false,
    error: null,
};

const projects = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.LOAD_PROJECTS_REQUEST:
            return {
                ...state,
                result: [],
                isLoading: true,
                error: null,
            };
        case actionTypes.LOAD_PROJECTS_SUCCESS:
            return {
                ...state,
                result: action.payload,
                isLoading: false,
                error: null,
            };
        case actionTypes.LOAD_PROJECTS_ERROR:
            return {
                ...state,
                result: [],
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default projects;
