import React from 'react';
import { createMobileRepository } from '../../repositories/Mobiles';
import { createMobileService } from '../../services/Mobiles';

export const InfrastructureContext = React.createContext();

export const InfrastructureProvider = ({ children }) => {
  const mobileRepository = createMobileRepository();
  const mobileService = createMobileService(mobileRepository);

  return <InfrastructureContext.Provider value={{ mobileService }}>{children}</InfrastructureContext.Provider>;
};
