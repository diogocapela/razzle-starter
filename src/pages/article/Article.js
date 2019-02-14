import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './Article.module.scss';

class Article extends PureComponent {
  render() {
    const { slug, title, description } = this.props;

    return (
      <main className={styles.wrapper}>
        <h1>{title} Page</h1>
        <ul>
          <li><b>Slug:</b> {slug}</li>
          <li><b>Title:</b> {title}</li>
          <li><b>Description:</b> {description}</li>
        </ul>
      </main>
    );
  }
}

Article.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.number,
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

export default connect(mapStateToProps)(Article);