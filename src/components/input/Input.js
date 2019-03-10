import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'lodash/noop';

import styles from './Input.module.scss';

function Input({
  label,
  type,
  onChange,
  onFocus,
  onBlur,
  required,
  disabled,
  theme,
  ...remainingProps
}) {
  return (
    <div className={classNames(styles.wrapper, theme.wrapper)}>
      <label className={classNames(styles.label, theme.label)}>
        {label}
      </label>
      <input
        className={classNames(styles.input, theme.input)}
        type={type}
        required={required}
        disabled={disabled}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        aria-label={label}
        {...remainingProps} />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  theme: PropTypes.shape({
    wrapper: PropTypes.string,
    label: PropTypes.string,
    input: PropTypes.string,
  }),
};

Input.defaultProps = {
  type: 'text',
  onChange: noop,
  onFocus: noop,
  onBlur: noop,
  required: false,
  disabled: false,
  theme: {},
};

export default Input;
