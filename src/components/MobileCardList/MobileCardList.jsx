import React from 'react';
import { Card } from '../Card';
import { NoDataFound } from '../NoDataFound';
import './index.scss';

export const MobileCardList = ({ mobileList, navigateTo }) => {
  return mobileList.length ? (
    <div className="wrapperGrid">
      {mobileList.map((mobileItem) => (
        <Card key={mobileItem.id} mobileItem={mobileItem} navigateTo={navigateTo} />
      ))}
    </div>
  ) : (
    <NoDataFound />
  );
};
