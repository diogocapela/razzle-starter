import React from 'react';
import PropTypes from 'prop-types';
import { Link as NativeLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import noop from 'lodash/noop';
import isString from 'lodash/isString';
import { actions as localeActions } from '@redux-locale';

function Link({ children, to, title, onClick, toLocale, changeLanguage, target, keep, ...remainingProps }) {
    let validTitle = title;

    if(isString(children) && !title) {
        validTitle = children;
    }

    const handleClick = () => {
        if(!keep) {
            window.scrollTo(0,0);
        }

        if(toLocale) {
            changeLanguage(toLocale);
        }

        onClick();
    };

    return target === '_blank' || !to || to.startsWith('mailto:') ? (
        <a
            aria-label={ validTitle }
            title={ validTitle }
            href={ to }
            target="_blank"
            rel="noopener noreferrer"
            onClick={ handleClick }
            { ...remainingProps }>{ children }</a>
    ) : (
        <NativeLink
            aria-label={ validTitle }
            title={ validTitle }
            to={ to }
            onClick={ handleClick }
            { ...remainingProps }>
            { children }
        </NativeLink>
    );
}

Link.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]).isRequired,
    to: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func,
    toLocale: PropTypes.string,
    changeLanguage: PropTypes.func.isRequired,
    target: PropTypes.string,
    keep: PropTypes.bool,
};

Link.defaultProps = {
    onClick: noop,
    target: '_self',
    keep: false,
};

const mapStateToProps = (state) => ({
    languages: state.locale.languages,
});

const mapDispatchToProps = {
    changeLanguage: localeActions.changeLanguage,
};

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
);

export default enhance(Link);