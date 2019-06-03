import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import GoogleIcon from 'mdi-react/GoogleIcon';
import TwitterIcon from 'mdi-react/TwitterIcon';
import FacebookIcon from 'mdi-react/FacebookIcon';
import GithubIcon from 'mdi-react/GithubBoxIcon';
import BnetIcon from 'mdi-react/BattlenetIcon';
import { actions as oauthActions } from '@redux-oauth';
import Button from '@components/button';

const API_URL = 'http://localhost:3000/oauth';

const PROVIDERS = {
    google: {
        title: 'Google',
    },
    twitter: {
        title: 'Twitter',
    },
    facebook: {
        title: 'Facebook',
    },
    github: {
        title: 'GitHub',
    },
    bnet: {
        title: 'Battle.net',
    },
};

const renderIcon = (provider) => {
    switch (provider) {
        case 'google':
            return <GoogleIcon />;
        case 'twitter':
            return <TwitterIcon />;
        case 'facebook':
            return <FacebookIcon />;
        case 'github':
            return <GithubIcon />;
        case 'bnet':
            return <BnetIcon />;
        default:
            return null;
    }
};

function OAuthLogin({ socket, provider, login, history, isAuthenticated }) {
    const [disabled, setDisabled] = useState(false);
    const popupRef = useRef();

    useEffect(() => {
        socket.on(`${provider}_oauth_login`, (user) => {
            if (!isAuthenticated) {
                login(user);
            }


            history.push('/profile');
        });
    }, [history, isAuthenticated, login, provider, socket]);

    const checkPopup = () => {
        const check = setInterval(() => {
            if (!popupRef.current || !popupRef.current.closed) return;
            clearInterval(check);
            setDisabled(false);
        }, 1000);
    };

    const openPopup = () => {
        const width = 600;
        const height = 600;
        const left = (window.innerWidth / 2) - (width / 2);
        const top = (window.innerHeight / 2) - (height / 2);
        const url = `${API_URL}/${provider}?socketId=${socket.id}`;

        return window.open(url, '',
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
          scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
          height=${height}, top=${top}, left=${left}`);
    };

    const handleLogin = () => {
        if (!disabled) {
            popupRef.current = openPopup();
            checkPopup();
            setDisabled(true);
        }
    };

    return (
        <Button
            onClick={handleLogin}
            disabled={disabled}>
            <span>
                {renderIcon(provider)} Login w/ {PROVIDERS[provider].title}
            </span>
        </Button>
    );
}

OAuthLogin.propTypes = {
    socket: PropTypes.object.isRequired,
    provider: PropTypes.oneOf(Object.keys(PROVIDERS)),
    login: PropTypes.func.isRequired,
    user: PropTypes.object,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    user: state.oauth.user,
    isAuthenticated: state.oauth.isAuthenticated,
});

const mapDispatchToProps = {
    login: oauthActions.login,
};

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
);

export default enhance(OAuthLogin);
