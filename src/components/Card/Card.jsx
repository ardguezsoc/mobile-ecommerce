import React from 'react';
import './index.scss';
import { useTranslation } from 'react-i18next';

export const Card = ({ mobileItem, navigateTo }) => {
  const { imgUrl, brand, model, price, id } = mobileItem;
  const { t } = useTranslation();

  const handlePrice = (price) => (price ? `${price}$` : 'Free');

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

          <p>{t('mobileDescription')}</p>
          <button className="productButton" onClick={() => navigateTo(`/mobile/${id}`)}>
            {t('viewMore')}
          </button>
        </div>
      </div>
    </div>
  );
};
