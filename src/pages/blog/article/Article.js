import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import translate from '@redux-locale/translate';
import Container from '@components/container';

import styles from './Article.module.scss';

function Article({ slug, title, description }) {
  return (
    <Container className={styles.wrapper}>
      <h1>{title}</h1>
      <ul>
        <li><b>Slug:</b> {slug}</li>
        <li><b>Title:</b> {title}</li>
        <li><b>Description:</b> {description}</li>
      </ul>
    </Container>
  );
}

Article.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  t: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => {
  const { match: { params: { slug } } } = props;
  const article = state.articles.result.find(p => p.slug === slug);

  return {
    slug: article.slug,
    title: article.title,
    description: article.description,
  };
};

const enhance = compose(
  translate('pages.blog'),
  connect(mapStateToProps),
);

export default enhance(Article);