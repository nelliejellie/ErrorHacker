import React, {ReactNode, createContext, useContext} from 'react';

const MyContext = createContext(null);

export const ContextProviders = ({children}: {children: ReactNode}) => {
  // Data to be shared globally
  
  return <MyContext.Provider>{children}</MyContext.Provider>;
};

export const useMyContext = () => useContext(MyContext);
