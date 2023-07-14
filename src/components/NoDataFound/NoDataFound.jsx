import React from 'react';
import './index.scss';
import { Toast, showToast } from '../Toast';

export const NoDataFound = () => {
  return (
    <div className="noDataFoundContainer">
      <Toast />
      <div className="noDataFoundLeftContainer">
        <h2>Upss...</h2>
        <h5>We have looked everywhere but we dont seem to have what you are looking for (Yet!).</h5>
        <h5>In the meantime, why dont you have a look at some offers?</h5>
        <button onClick={() => showToast('There is no offers', 'info')}>Lets see some offers</button>
      </div>
      <img src="/images/notResults.webp" alt="not-found-results-images" />
    </div>
  );
};
