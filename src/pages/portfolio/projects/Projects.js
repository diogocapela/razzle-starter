import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Link from '@components/link';

import styles from './Projects.module.scss';

function Projects({ projects }) {
    return (
        <main className={ styles.wrapper }>
            <h1>Portfolio</h1>
            { projects.map(({ slug, title }) => (
                <article key={ slug }>
                    <Link to={ `/portfolio/${slug}` }>{ title }</Link>
                </article>
            )) }
        </main>
    );
}

Projects.propTypes = {
    projects: PropTypes.array,
};

Projects.defaultProps = {
    projects: [],
};

const mapStateToProps = (state, props) => {
    return {
        projects: state.projects.result,
    };
};

export default connect(mapStateToProps)(Projects);
