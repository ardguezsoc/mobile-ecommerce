import React from 'react';
import './index.css';

export const MobileCard = (mobile) => {
  return (
    <div className="container_product_card">
      <div className="top_card">
        <img src={mobile.imgUrl} alt="product-image" className="product_image" />
      </div>
      <div className="bottom_card">
        <div className="product_name">
          <h6>{mobile.brand}</h6>
          <h4>{mobile.model}</h4>
        </div>
        <button type="button" className="product_button">
          Add To Cart
        </button>
      </div>
    </div>
  );
};
