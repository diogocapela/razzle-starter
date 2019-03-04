import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import translate from '@redux-locale/translate';
import Link from '@components/link';

import styles from './Articles.module.scss';

function Articles({ t, articles }) {
    return (
        <main className={ styles.wrapper }>
            <h1>{ t('blog') }</h1>
            { articles.map(({ slug, title }) => (
                <article key={ slug }>
                    <Link to={ `/blog/${slug}` }>{ title }</Link>
                </article>
            )) }
        </main>
    );
}

Articles.propTypes = {
    articles: PropTypes.array,
    t: PropTypes.func.isRequired,
};

Articles.defaultProps = {
    articles: [],
};

const mapStateToProps = (state, props) => {
    return {
        articles: state.articles.result,
    };
};

const enhance = compose(
    translate('pages.blog'),
    connect(mapStateToProps),
);

export default enhance(Articles);