import { createContext } from 'react';

const ServiceContext = createContext({
  services: { seo: false, ads: false, web: false },
  setServices: () => {},
  numPages: 0,
  setNumPages: () => {},
  numLanguages: 0,
  setNumLanguages: () => {},
});

export default ServiceContext;