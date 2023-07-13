import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const DetailCard = ({ mobileData }) => {
  const { brand, price, model, os, ram, camera, secondCamera, weight, cpu, battery, dimentions, screen } = mobileData;
  const [moreDetails, setMoreDetails] = useState(false);
  const navigate = useNavigate();

  const oldPrice = (price) => (parseInt(price) + 100).toString();

  return (
    <>
      <div className="wrapMobileDetail">
        <h2>{brand}</h2>
        <div className="mobileDetailPriceContainer fullGridrow">
          <p className="mobileDetailNewPrice">{price}$</p>
          <p className="mobileDetailOldPrice">{oldPrice(price)}$</p>
        </div>
        <div className="fullGridrow deliveryContainer">
          <p>Sell and sent by</p>
          <p className="deliveryCompanyName">Emobile</p>
        </div>
        <div className="mobileDetailLabel">Model</div>
        <div>{model}</div>
        <div>Os</div>
        <div>{os}</div>
        <div>Ram</div>
        <div>{ram}</div>
        <div>Camera</div>
        <div>{camera}</div>
        <div>Second Camera</div>
        <div>{secondCamera}</div>
        <div>Weight</div>
        <div>{weight}gr</div>
      </div>
      {!moreDetails ? (
        <a onClick={() => setMoreDetails(true)}>More details</a>
      ) : (
        <div className="wrapMobileDetail">
          <div className="fullGridrow">CPU: {cpu}</div>
          <div className="fullGridrow">Screen: {screen}</div>
          <div className="fullGridrow">Battery: {battery}</div>
          <div className="fullGridrow">Dimentions: {dimentions}</div>
        </div>
      )}

      <div className="moreMobileOffers">
        <p>More offers from Emobile</p>
        <button onClick={() => navigate('/')}>See offers</button>
      </div>

      <div className="deliveryExtranInfo ">
        <div className="fullGridrow">🚚 Delivery Information</div>
        <div>Free delivery between today - 20 Dec</div>
        <div>Urgent Delivery between today - tomorrow</div>
        <div>24 Months of warranty</div>
        <div>Delivery with extra protection only 4$</div>
      </div>
    </>
  );
};
