import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const DetailCard = ({ mobileData }) => {
  const { brand, price, model, os, ram, camera, secondCamera, weight, cpu, battery, dimentions, screen } = mobileData;
  const [moreDetails, setMoreDetails] = useState(false);
  const navigate = useNavigate();

  const oldPrice = (price) => (parseInt(price) + 100).toString();
  const { t } = useTranslation();

  return (
    <>
      <div className="wrapMobileDetail">
        <h2>{brand}</h2>
        <div className="mobileDetailPriceContainer fullGridrow">
          <p className="mobileDetailNewPrice">
            {price}
            {t('currency')}
          </p>
          <p className="mobileDetailOldPrice">
            {oldPrice(price)}
            {t('currency')}
          </p>
        </div>
        <div className="fullGridrow deliveryContainer">
          <p>{t('sentBy')}</p>
          <p className="deliveryCompanyName">{t('emobile')}</p>
        </div>
        <div className="mobileDetailLabel"> {t('model')}</div>
        <div>{model}</div>
        <div> {t('os')}</div>
        <div>{os}</div>
        <div>{t('ram')}</div>
        <div>{ram}</div>
        <div>{t('camera')}</div>
        <div>{camera}</div>
        <div>{t('secondCamera')}</div>
        <div>{secondCamera}</div>
        <div>{t('weight')}</div>
        <div>
          {weight}
          {t('gr')}
        </div>
      </div>
      {!moreDetails ? (
        <a onClick={() => setMoreDetails(true)}>{t('moreDetails')}</a>
      ) : (
        <div className="wrapMobileDetail">
          <div className="fullGridrow">
            {t('cpu')}: {cpu}
          </div>
          <div className="fullGridrow">
            {t('screen')}: {screen}
          </div>
          <div className="fullGridrow">
            {t('battery')}: {battery}
          </div>
          <div className="fullGridrow">
            {t('dimentions')}: {dimentions}
          </div>
        </div>
      )}

      <div className="moreMobileOffers">
        <p>{t('moreOfferFrom')}</p>
        <button onClick={() => navigate('/')}>{t('seeOffer')}</button>
      </div>

      <div className="deliveryExtranInfo ">
        <div className="fullGridrow">{t('deliveryInfo')}</div>
        <div>{t('freeDelivery')}</div>
        <div>{t('urgentDelivery')}</div>
        <div>{t('warranty')}</div>
        <div>{t('deliveryProtection')}</div>
      </div>
    </>
  );
};
