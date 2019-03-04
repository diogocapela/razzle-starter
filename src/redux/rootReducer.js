import { combineReducers } from 'redux';

import articles from './redux-articles';
import locale from './redux-locale';
import projects from './redux-projects';

export default combineReducers({
    articles,
    locale,
    projects,
});
