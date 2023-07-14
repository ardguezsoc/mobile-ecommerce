import React from 'react';
import './index.scss';

export const BackArrow = ({ goBack }) => (
  <div className="arrowContainer">
    <img className="arrow" src="/icons/leftArrow.svg" alt="back-arrow" onClick={() => goBack()} />
  </div>
);
