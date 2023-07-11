export const createMobileService = async (mobileRepository) => {
  const getMobilePage = () => mobileRepository.getMobilePage();

  return {
    getMobilePage,
  };
};
