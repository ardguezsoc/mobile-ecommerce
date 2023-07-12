import React from 'react';
import { Card } from '../Card';
import './index.css';

export const MobileCardList = ({ mobileList }) => {
  return (
    <div className="wrapperGrid">
      {mobileList.map((mobileItem) => (
        <Card key={mobileItem.id} mobileItem={mobileItem} />
      ))}
    </div>
  );
};
