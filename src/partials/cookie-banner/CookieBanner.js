import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { USER_ACCEPTS_COOKIES } from '@config/cookieTypes';
import translate from '@redux-locale/translate';
import Button from '@components/button';
import Container from '@components/container';

import styles from './CookieBanner.module.scss';

function CookieBanner({ t }) {
  const [isOpen, setIsOpen] = useState(true);

  const shouldHide = Cookies.get(USER_ACCEPTS_COOKIES);

  const handleClose = () => {
    setIsOpen(false);
    Cookies.set(USER_ACCEPTS_COOKIES, true);
  };

  if (!isOpen || shouldHide) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <Container>
        <p>{t('text')}</p>
        <Button onClick={handleClose} aria-label="Accept Cookies" theme={{ wrapper: styles.close }}>
          {t('accept-cookies')}
        </Button>
      </Container>
    </div>
  );
}

CookieBanner.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate('partials.cookie-banner')(CookieBanner);
