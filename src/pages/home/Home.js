import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import translate from '@redux-locale/translate';
import InboxIcon from 'mdi-react/InboxIcon';
import AboutIcon from 'mdi-react/AboutIcon';
import EarthBoxIcon from 'mdi-react/EarthBoxIcon';
import LadybirdIcon from 'mdi-react/LadybirdIcon';
import FacebookIcon from 'mdi-react/FacebookIcon';
import WechatIcon from 'mdi-react/WechatIcon';
import LinkedinIcon from 'mdi-react/LinkedinIcon';
import Button from '@components/button';
import Container from '@components/container';
import Input from '@components/input';
import Link from '@components/link';
import Textarea from '@components/textarea';
import PageTitle from '@components/page-title';

import styles from './Home.module.scss';

function Home({ t }) {
  return (
    <Container className={styles.wrapper}>
      <PageTitle title={t('hello-world')} />
      <h1><b>Locales:</b></h1>
      <div>
        <Link toLocale="en-US">en-US</Link>
        <Link toLocale="pt-PT">pt-PT</Link>
      </div>
      <h1>This is an <b>h1</b></h1>
      <h2>This is an <b>h2</b></h2>
      <h3>This is an <b>h3</b></h3>
      <h4>This is an <b>h4</b></h4>
      <h5>This is an <b>h5</b></h5>
      <h6>This is an <b>h6</b></h6>
      <p>This is a regular <b>p</b> paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <blockquote>This is the <b>blockquote</b> element.</blockquote>
      <p>This is some text with a <a href="/storybook">link</a> element.</p>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
        <li>List item 4</li>
      </ul>
      <span>This is a <b>span</b> element.</span>
      <h1>Button</h1>
      <Button>This is a button</Button>
      <br /><br />
      <Button fullWidth>This is a full width button</Button>
      <h1>Icons</h1>
      <InboxIcon />
      <AboutIcon />
      <FacebookIcon />
      <EarthBoxIcon />
      <LadybirdIcon />
      <WechatIcon />
      <LinkedinIcon />
      <h1>Input</h1>
      <Input placeholder="This is the placeholder text" />
      <h1>Link</h1>
      <Link to="#">This is a link</Link>
      <h1>Textarea</h1>
      <Textarea placeholder="This is the placeholder text" />
    </Container>
  );
}

Home.propTypes = {
  t: PropTypes.func.isRequired,
};

const enhance = compose(
  translate('pages.home'),
);

export default enhance(Home);
