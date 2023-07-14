import axios from 'axios';
import { service_backend_url } from '../../config';
import { mobilePageMapper, mobileMapper } from './mapper';

export const createMobileRepository = () => {
  const getMobilePage = async () => {
    const mobilesPage = await axios.get(`${service_backend_url}/api/product`);

    return mobilePageMapper(mobilesPage.data);
  };

  const getMobileDetails = async (id) => {
    const mobileDetail = await axios.get(`${service_backend_url}/api/product/${id}`);

    return mobileMapper(mobileDetail.data);
  };

  const postMobileToCart = async ({ id, memory, color }) =>
    await axios.post(`${service_backend_url}/api/cart`, {
      id,
      colorCode: color,
      storageCode: memory,
    });

  return {
    getMobilePage,
    getMobileDetails,
    postMobileToCart,
  };
};
