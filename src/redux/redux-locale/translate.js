import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';

const mapStateToProps = ({ locale: { translations } }) => ({
    translations,
});

const translate = key => (Component) => {
    const TranslatedComponent = ({ translations, ...rest }) => (
        <Component
            t={ useCallback(subKey => get(translations, `${key}.${subKey}`, subKey), [translations]) }
            { ...rest } />
    );

    return connect(mapStateToProps, {})(TranslatedComponent);
};

export default translate;
