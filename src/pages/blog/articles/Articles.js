import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import translate from '@redux-locale/translate';
import Container from '@components/container';
import Link from '@components/link';
import PageTitle from '@components/page-title';

import styles from './Articles.module.scss';

function Articles({ t, articles }) {
    return (
        <Container className={styles.wrapper}>
            <PageTitle title={t('blog')} />
            {articles.map(({ slug, title }) => (
                <article key={slug}>
                    <Link to={`/blog/${slug}`}>{title}</Link>
                </article>
            ))}
        </Container>
    );
}

Articles.propTypes = {
    articles: PropTypes.array,
    t: PropTypes.func.isRequired,
};

Articles.defaultProps = {
    articles: [],
};

const mapStateToProps = state => ({
    articles: state.articles.result,
});

const enhance = compose(
    translate('pages.blog'),
    connect(mapStateToProps),
);

export default enhance(Articles);
