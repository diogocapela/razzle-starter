import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

export default function (ComposedComponent) {
    function onlyLoggedOut({ isAuthenticated, history }) {
        if (!isAuthenticated) return <ComposedComponent />;
        history.push('/profile');
        return null;
    }

    onlyLoggedOut.propTypes = {
        isAuthenticated: PropTypes.bool,
    };

    const mapStateToProps = state => ({
        isAuthenticated: state.oauth.isAuthenticated,
    });

    const enhance = compose(
        withRouter,
        connect(mapStateToProps, null),
    );

    return enhance(onlyLoggedOut);
}
