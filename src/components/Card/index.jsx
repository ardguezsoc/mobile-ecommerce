import React from 'react';
import './index.css';

export const Card = ({ mobileItem }) => {
  const { imgUrl, brand, model, price } = mobileItem;

  return (
    <div className="products">
      <div className="product">
        <div className="image">
          <img src={imgUrl} alt="product-image" />
          <div className="namePrice">
            <div>
              <h3>{brand}</h3>
              <h4>{model}</h4>
            </div>
            <span>{price}€</span>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quibusdam asperiores porro tempora
            veritatis cumque.
          </p>
          <button className="productButton">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};
