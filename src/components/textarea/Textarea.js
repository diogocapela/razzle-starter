import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'lodash/noop';

import styles from './Textarea.module.scss';

function Textarea({
  label,
  rows,
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
      <textarea
        className={classNames(styles.input, theme.input)}
        rows={rows}
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

Textarea.propTypes = {
  label: PropTypes.string,
  rows: PropTypes.number,
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

Textarea.defaultProps = {
  type: 'text',
  rows: 4,
  onChange: noop,
  onFocus: noop,
  onBlur: noop,
  required: false,
  disabled: false,
  theme: {},
};

export default Textarea;
