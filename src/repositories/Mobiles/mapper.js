export const mobilePageMapper = (mobiles) => {
  return mobiles.map(({ id, brand, model, price, imgUrl }) => {
    return {
      id: id,
      brand: brand,
      model: model,
      price: price,
      imgUrl: imgUrl,
    };
  });
};

export default mobilePageMapper;
