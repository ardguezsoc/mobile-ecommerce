import React from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks';
import { Breadcrumbs } from '../Breadcrumbs';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const navigate = useNavigate();

  const navigateHome = () => navigate('/');

  const { numberOfItems } = useCart();
  const { t } = useTranslation();

  return (
    <>
      <div className="header">
        <div className="headerLogo" onClick={() => navigateHome()}>
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="webName" data-testid="eMobile" onClick={() => navigateHome()}>
          <h3>{t('emobile')}</h3>
        </div>
        <div className="cartContainer">
          <div className="cartNumberItems">{numberOfItems}</div>
          <img src="/icons/cart.svg" alt="cart" height="25px" width="25px" />
        </div>
      </div>
      <Breadcrumbs />
    </>
  );
};
