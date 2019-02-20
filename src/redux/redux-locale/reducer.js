import * as actionTypes from './actionTypes';

const locale = (state = {}, action = {}) => {
    switch (action.type) {
        case actionTypes.LOAD_LANGUAGE_REQUEST:
            return {
                ...state,
                language: action.language
            };
        default:
            return state;
    }
};

export default locale;
