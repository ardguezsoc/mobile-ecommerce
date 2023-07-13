export const createMobileService = (mobileRepository) => {
  const getMobilePage = () => mobileRepository.getMobilePage();

  const getMobileDetails = (id) => mobileRepository.getMobileDetails(id);

  const postMobileToCart = (mobileData) => mobileRepository.postMobileToCart(mobileData);

  return {
    getMobilePage,
    getMobileDetails,
    postMobileToCart,
  };
};
