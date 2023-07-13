export const mobilePageMapper = (mobiles) => {
  return mobiles.map(({ id, brand, model, price, imgUrl }) => {
    return {
      id,
      brand,
      model,
      price,
      imgUrl,
    };
  });
};

export const mobileMapper = ({
  id,
  brand,
  model,
  price,
  imgUrl,
  cpu,
  ram,
  os,
  displayResolution,
  primaryCamera,
  secondaryCmera,
  battery,
  dimentions,
  weight,
  options,
}) => ({
  id,
  brand,
  model,
  price,
  imgUrl,
  cpu,
  ram,
  os,
  screen: displayResolution,
  battery,
  camera: primaryCamera,
  secondCamera: secondaryCmera,
  dimentions,
  weight,
  options,
});

export default { mobilePageMapper, mobileMapper };
