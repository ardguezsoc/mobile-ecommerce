import { useContext } from 'react';
import { InfrastructureContext } from '../context/infraestructure';

export const useMobileSource = () => {
  const { mobileService } = useContext(InfrastructureContext);
  return { ...mobileService };
};

export default useMobileSource;
