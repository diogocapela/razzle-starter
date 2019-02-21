import * as actionTypes from './actionTypes';
import Cookies from 'js-cookie';

// Cookie Types
import { SUBFOLDER_COOKIE } from '@config/cookieTypes';

export const changeLanguage = (subfolder) => (dispatch) => {
    const language = require(`@redux/api/languages/${subfolder}.json`);

    Cookies.set(SUBFOLDER_COOKIE, subfolder);
    dispatch({
        type: actionTypes.LOAD_LANGUAGE_REQUEST,
        language,
    });
};
