import { combineReducers } from 'redux';

import articles from './redux-articles';
import locale from './redux-locale';
import oauth from './redux-oauth';
import projects from './redux-projects';

export default combineReducers({
    articles,
    locale,
    oauth,
    projects,
});
