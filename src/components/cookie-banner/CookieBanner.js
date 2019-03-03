import React, { useState } from 'react';
import Cookies from 'js-cookie';

import { USER_ACCEPTS_COOKIES } from '@config/cookieTypes';

import styles from './CookieBanner.module.scss';

function CookieBanner() {
  const [isOpen, setIsOpen] = useState(true);

  const shouldHide = Cookies.get(USER_ACCEPTS_COOKIES);

  const handleClose = () => {
    setIsOpen(false);
    Cookies.set(USER_ACCEPTS_COOKIES, true);
  }

  if (!isOpen || shouldHide) {
    return null;
  }

  return (
    <div className={ styles.wrapper }>
      <p>This site uses first and third party cookies to provide you with a great user experience, measure audiences and show you personalized ads. By using Airbnb you accept our use of cookies. For more details about cookies and how to manage them, see our Cookie Policy.</p>
      <button onClick={ handleClose } aria-label="Accept Cookies" className={ styles.close }>Accept Cookies</button>
    </div>
  );
}

export default CookieBanner;
