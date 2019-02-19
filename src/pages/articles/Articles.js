import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Link from '@components/link';

import styles from './Articles.module.scss';

function Articles({ articles }) {
    return (
        <main className={ styles.wrapper }>
            <h1>Articles Page</h1>
            { articles.map(({ slug, title }) => (
                <article key={ slug }>
                    <Link to={ `/articles/${slug}` }>{ title }</Link>
                </article>
            )) }
        </main>
    );
}

Articles.propTypes = {
    articles: PropTypes.array,
};

Articles.defaultProps = {
    articles: [],
};

const mapStateToProps = (state, props) => {
    return {
        articles: state.articles.result,
    };
};

export default connect(mapStateToProps)(Articles);
