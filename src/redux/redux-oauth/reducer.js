import * as actionTypes from './actionTypes';

const initialState = {
    user: undefined,
    isAuthenticated: false,
};

const oauth = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: !!action.payload,
            };
        case actionTypes.LOGOUT:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};

export default oauth;
