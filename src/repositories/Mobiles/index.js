import axios from 'axios';
import { service_backend_url } from '../../config';
import { mobilePageMapper } from './mapper';

export const getMobiles = async () => {
  const mobilesPage = await axios.get(`${service_backend_url}/api/product`);

  return mobilePageMapper(mobilesPage.data);
};
