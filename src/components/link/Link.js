import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link as NativeLink } from 'react-router-dom';
import noop from 'lodash/noop';

class Link extends PureComponent {

    render() {
        const { children, to, title, target, keep, ...remainingProps } = this.props;

        if (target === '_blank') {
            return (
                <a
                    aria-label={ title }
                    title={ title }
                    href={ to }
                    target="_blank"
                    rel="noopener noreferrer"
                    { ...remainingProps }>{ children }</a>
            )
        }
        return (
            <NativeLink
                to={ to }
                onClick={ keep ? noop : this.handleClick }
                { ...remainingProps }>
                { children }
            </NativeLink>
        );
    }

    handleClick = () => {
        this.scrollTop();
    }

    scrollTop = () => {
        window.scrollTo(0,0);
    }
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