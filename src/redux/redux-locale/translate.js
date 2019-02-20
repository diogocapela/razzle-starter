import React, { useCallback } from 'react';
import { connect } from 'react-redux';

const translate = (key) => (Component) => {
    const TranslatedComponent = ({ language, ...rest }) => {
        return <Component
                    t={ useCallback((subKey) => language[key][subKey], [language]) }
                    { ...rest } />
    };

    return connect(mapState, {})(TranslatedComponent);
}

const mapState = ({ locale: { language } }) => ({
    language,
});

export default translate;