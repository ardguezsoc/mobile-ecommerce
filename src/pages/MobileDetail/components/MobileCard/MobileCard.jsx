import React, { useState } from 'react';
import { DetailCard } from '../DetailCard';
import { MobileOptions } from '../MobileOptions';
import { Spinner } from '../../../../components/Spinner';

export const MobileCard = ({ mobileData, postMobile, addingItemToCart }) => {
  const { imgUrl, options } = mobileData;
  const optionValues = Object.values(options);

  const [memory, setMemory] = useState(options.storages[0].code);
  const [color, setColor] = useState(options.colors[0].code);

  return (
    <div className="mobileDetailContainer">
      <div>
        <img src={imgUrl} alt="mobile-image" />
      </div>
      <div className="rightMobileDetailContainer">
        <DetailCard mobileData={mobileData} />
        <MobileOptions options={optionValues} setFunction={[setColor, setMemory]} />
        <button disabled={addingItemToCart} className="productButton" onClick={() => postMobile({ memory, color })}>
          {addingItemToCart ? <Spinner /> : 'Add to cart'}
        </button>
      </div>
    </div>
  );
};
