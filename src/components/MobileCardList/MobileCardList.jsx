import React from 'react';
import { Card } from '../Card';
import './index.css';

export const MobileCardList = ({ mobileList, navigateTo }) => {
  return (
    <div className="wrapperGrid">
      {mobileList.map((mobileItem) => (
        <Card key={mobileItem.id} mobileItem={mobileItem} navigateTo={navigateTo} />
      ))}
    </div>
  );
};
