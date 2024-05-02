import React, {ReactNode, createContext, useContext} from 'react';

const MyContext = createContext(null);

export const ContextProvider = ({children}: {children: ReactNode}) => {
  // Data to be shared globally
  

  // include value
  return <MyContext.Provider>{children}</MyContext.Provider>;
};

export const useMyContext = () => useContext(MyContext);
