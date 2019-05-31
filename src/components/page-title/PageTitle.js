import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './PageTitle.module.scss';

function PageTitle({ title, className, theme }) {
  return (
    <h1 className={classNames(styles.wrapper, theme.wrapper, className)}>{title}</h1>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.shape({
    wrapper: PropTypes.string,
  }),
};

PageTitle.defaultProps = {
  theme: {},
};

export default PageTitle;
