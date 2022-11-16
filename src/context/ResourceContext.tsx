/* eslint-disable prettier/prettier */
import React, {createContext, useState} from 'react';

export const ResourceContext = createContext({});

const ResourceProvider = ({children}) => {
  const [resource, setResource] = useState({});
  return (
    <ResourceContext.Provider value={{resource, setResource}}>
      {children}
    </ResourceContext.Provider>
  );
};

export default ResourceProvider;
