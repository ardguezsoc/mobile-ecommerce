import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks';

export const Header = () => {
  const navigate = useNavigate();

  const navigateHome = () => navigate('/');

  const { numberOfItems } = useCart();

  return (
    <div className="header">
      <div className="headerLogo" onClick={() => navigateHome()}>
        <img src="./images/logo.png" alt="logo" />
      </div>
      <div className="webName" onClick={() => navigateHome()}>
        <h3>EMobile</h3>
      </div>
      <div className="cartContainer">
        <div className="cartNumberItems">{numberOfItems}</div>
        <img src="./icons/cart.svg" alt="cart" height="25px" width="25px" />
      </div>
    </div>
  );
};
