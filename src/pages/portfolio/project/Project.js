import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './Project.module.scss';

function Project({ slug, title, description }) {
  return (
    <main className={styles.wrapper}>
      <h1>{title}</h1>
      <ul>
        <li><b>Slug:</b> {slug}</li>
        <li><b>Title:</b> {title}</li>
        <li><b>Description:</b> {description}</li>
      </ul>
    </main>
  );
}

Project.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

const mapStateToProps = (state, props) => {
  const { match: { params: { slug } } } = props;
  const project = state.projects.result.find(p => p.slug === slug);

  return {
    slug: project.slug,
    title: project.title,
    description: project.description,
  };
};

export default connect(mapStateToProps)(Project);