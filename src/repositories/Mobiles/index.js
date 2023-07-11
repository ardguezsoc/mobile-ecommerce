import axios from 'axios';
import { service_backend_url } from '../../config';
import { mobilePageMapper } from './mapper';

export const createMobileRepository = () => {
  const getMobilePage = async () => {
    const mobilesPage = await axios.get(`${service_backend_url}/api/product`);
    return mobilePageMapper(mobilesPage.data);
  };

  return {
    getMobilePage,
  };
};
