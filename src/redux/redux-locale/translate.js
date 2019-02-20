import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';

const translate = (key) => (Component) => {
    const TranslatedComponent = ({ language, ...rest }) => {
        return <Component
                    t={ useCallback((subKey) => get(language,`${key}.${subKey}`, subKey), [language]) }
                    { ...rest } />
    };

    return connect(mapState, {})(TranslatedComponent);
}

const mapState = ({ locale: { language } }) => ({
    language,
});

export default translate;