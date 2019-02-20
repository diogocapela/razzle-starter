import * as actionTypes from './actionTypes';
import Cookies from 'js-cookie';

export const changeLanguage = (subfolder) => (dispatch) => {
    const language = require(`../../assets/languages/${subfolder}.json`);

    Cookies.set('subfolder', subfolder);
    dispatch({
        type: actionTypes.LOAD_LANGUAGE_REQUEST,
        language,
    });
};
