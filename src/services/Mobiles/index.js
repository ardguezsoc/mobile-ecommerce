export const createMobileService = (mobileRepository) => {
  const getMobilePage = () => mobileRepository.getMobilePage();

  return {
    getMobilePage,
  };
};
