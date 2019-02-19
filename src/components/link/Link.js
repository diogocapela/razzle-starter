import React from 'react';
import PropTypes from 'prop-types';
import { Link as NativeLink } from 'react-router-dom';

function Link({ children, to, title, target, keep, ...remainingProps }) {
    return target === '_blank' ? (
        <a
            aria-label={ title }
            title={ title }
            href={ to }
            target="_blank"
            rel="noopener noreferrer"
            { ...remainingProps }>{ children }</a>
    ) : (
        <NativeLink
            to={ to }
            onClick={ keep ? undefined : () => window.scrollTo(0,0) }
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
    to: PropTypes.string.isRequired,
    title: PropTypes.string,
    target: PropTypes.string,
    keep: PropTypes.bool,
};

Link.defaultProps = {
    target: '_self',
    keep: false,
};

export default Link;