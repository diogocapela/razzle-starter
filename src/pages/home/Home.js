import React, { PureComponent } from 'react';

import styles from './Home.module.scss';

class Home extends PureComponent {
  render() {
    return (
      <main className={styles.wrapper}>
        <h1>Home Page</h1>
      </main>
    );
  }
}

export default Home;
