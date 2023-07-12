import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

export const Card = ({ mobileItem }) => {
  const { imgUrl, brand, model, price, id } = mobileItem;

  const handlePrice = (price) => (price ? `${price}$` : 'Free');

  const navigate = useNavigate();

  return (
    <div className="productContainer">
      <div className="product">
        <div className="productImage">
          <img src={imgUrl} alt="product-image" />
          <div className="namePrice">
            <div>
              <h3>{brand}</h3>
              <h4>{model}</h4>
            </div>
            <span>{handlePrice(price)}</span>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quibusdam asperiores porro tempora
            veritatis cumque.
          </p>
          <button className="productButton" onClick={() => navigate(`/mobile/${id}`)}>
            View more
          </button>
        </div>
      </div>
    </div>
  );
};
