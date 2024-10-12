import React, { useState } from 'react';
import ServiceContext from './servicesContext';

function ServiceProvider({ children }) {
  const [services, setServices] = useState({ seo: false, ads: false, web: false });
  const [numPages, setNumPages] = useState(0);
  const [numLanguages, setNumLanguages] = useState(0);

  return (
    <ServiceContext.Provider value={{ services, setServices, numPages, setNumPages, numLanguages, setNumLanguages }}>
      {children}
    </ServiceContext.Provider>
  );
}

export default ServiceProvider;
