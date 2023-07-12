import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };
  return (
    <div className="header">
      <div className="headerLogo" onClick={() => navigateHome()}>
        <img src="./images/logo.png" alt="logo" />
      </div>
      <div className="webName" onClick={() => navigateHome()}>
        <h3>EMobile</h3>
      </div>
      <div>
        <img src="./images/cart.svg" alt="cart" height="25px" width="25px" />
      </div>
    </div>
  );
};
