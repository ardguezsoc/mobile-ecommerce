import React from 'react';
import './index.css';

export const BackArrow = ({ goBack }) => (
  <img className="arrow" src="../icons/leftArrow.svg" alt="back-arrow" onClick={() => goBack()} />
);
