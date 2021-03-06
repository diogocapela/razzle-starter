import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import translate from '@redux-locale/translate';
import Container from '@components/container';
import PageTitle from '@components/page-title';

import styles from './Project.module.scss';

function Project({ slug, title, description }) {
  return (
    <Container className={styles.wrapper}>
      <PageTitle title={title} />
      <ul>
        <li><b>Slug:</b> {slug}</li>
        <li><b>Title:</b> {title}</li>
        <li><b>Description:</b> {description}</li>
      </ul>
    </Container>
  );
}

Project.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  t: PropTypes.func.isRequired,
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

const enhance = compose(
  translate('pages.porfolio'),
  connect(mapStateToProps),
);

export default enhance(Project);
