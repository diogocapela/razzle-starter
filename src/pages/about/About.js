import React, { PureComponent } from 'react';

import styles from './About.module.scss';

class About extends PureComponent {
  render() {
    return (
      <main className={styles.wrapper}>
        <h1>About Page</h1>
      </main>
    );
  }
}

export default About;
