import { React, useState } from 'react';
import { DetailCard } from '../DetailCard';
import { MobileOptions } from '../MobileOptions';

export const MobileCard = ({ mobileData, postMobile }) => {
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
        <button className="productButton" onClick={() => postMobile({ memory, color })}>
          Add to cart
        </button>
      </div>
    </div>
  );
};
