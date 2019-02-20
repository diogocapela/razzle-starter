import articles from './redux-articles';
import locale from './redux-locale';
import { combineReducers } from 'redux';

export default combineReducers({
    articles,
    locale,
});
