import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Link from '@components/link';

import styles from './Articles.module.scss';

class Articles extends PureComponent {
    render() {
        const { articles } = this.props;

        return (
            <main className={ styles.wrapper }>
                <h1>Articles Page</h1>
                { articles.map(this.renderProject, this) }
            </main>
        );
    }

    renderProject({ title, year, slug }) {
        return (
            <article key={ slug }>
                <Link to={ `/articles/${slug}` }>{ title }</Link>
            </article>
        )
    }
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
