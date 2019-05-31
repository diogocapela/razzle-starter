/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable import/prefer-default-export */
import Cookies from 'js-cookie';
import { LOCALE_COOKIE } from '@config/cookieTypes';
import * as actionTypes from './actionTypes';

export const changeLanguage = locale => (dispatch) => {
    const translations = require(`@api/locale/${locale}.json`);

    Cookies.set(LOCALE_COOKIE, locale);
    dispatch({
        type: actionTypes.LOAD_LOCALE_REQUEST,
        translations,
    });
};
