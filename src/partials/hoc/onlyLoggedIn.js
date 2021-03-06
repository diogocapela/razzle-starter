import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

export default function (ComposedComponent) {
    function onlyLoggedIn({ isAuthenticated, history }) {
        if (isAuthenticated) return <ComposedComponent />;
        history.push('/login');
        return null;
    }

    onlyLoggedIn.propTypes = {
        isAuthenticated: PropTypes.bool,
    };

    const mapStateToProps = state => ({
        isAuthenticated: state.oauth.isAuthenticated,
    });

    const enhance = compose(
        withRouter,
        connect(mapStateToProps, null),
    );

    return enhance(onlyLoggedIn);
}
