import * as actionTypes from './actionTypes';

const locale = (state = {}, action = {}) => {
    switch (action.type) {
        case actionTypes.LOAD_LOCALE_REQUEST:
            return {
                ...state,
                translations: action.translations,
            };
        default:
            return state;
    }
};

export default locale;
