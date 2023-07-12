import React from 'react';

export const DetailCard = ({ mobileData }) => {
  const { brand, price, model, os, ram, camera, secondCamera, weight, cpu, battery, dimentions, screen } = mobileData;

  const oldPrice = (price) => (parseInt(price) + 100).toString();

  return (
    <div className="wrapMobileDetail">
      <h2>{brand}</h2>
      <div className="mobileDetailPriceContainer ">
        <p className="mobileDetailNewPrice">{price}$</p>
        <p className="mobileDetailOldPrice">{oldPrice(price)}$</p>
      </div>
      <div>{model}</div>
      <div>{os}</div>
      <div>{ram}</div>
      <div>{camera}</div>
      <div>{secondCamera}</div>
      <div>{weight}</div>
      <div className="fullGridrow">{cpu}</div>
      <div className="fullGridrow">{screen}</div>
      <div className="fullGridrow">{battery}</div>
      <div className="fullGridrow">{dimentions}</div>
    </div>
  );
};
