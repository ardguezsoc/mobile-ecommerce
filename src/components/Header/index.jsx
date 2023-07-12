import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="headerLogo" onClick={() => navigate('/')}>
        <img src="./images/logo.png" alt="logo" />
      </div>
      <div className="webName" onClick={() => navigate('/')}>
        <h3>EMobile</h3>
      </div>
      <div>
        <img src="./images/cart.svg" alt="cart" height="25px" width="25px" />
      </div>
    </div>
  );
};
