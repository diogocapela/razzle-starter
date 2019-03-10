import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import translate from '@redux-locale/translate';
import Container from '@components/container';
import Link from '@components/link';

import styles from './Projects.module.scss';

function Projects({ t, projects }) {
    return (
        <Container className={ styles.wrapper }>
            <h1>{ t('portfolio') }</h1>
            { projects.map(({ slug, title }) => (
                <article key={ slug }>
                    <Link to={ `/portfolio/${slug}` }>{ title }</Link>
                </article>
            )) }
        </Container>
    );
}

Projects.propTypes = {
    projects: PropTypes.array,
    t: PropTypes.func.isRequired,
};

Projects.defaultProps = {
    projects: [],
};

const mapStateToProps = (state, props) => {
    return {
        projects: state.projects.result,
    };
};

const enhance = compose(
    translate('pages.portfolio'),
    connect(mapStateToProps),
  );

export default enhance(Projects);
