import React from 'react';
import { Card } from '../Card';

export const MobileCardList = ({ mobileList }) =>
  mobileList.map((mobileItem) => <Card key={mobileItem.id} mobileItem={mobileItem} />);
