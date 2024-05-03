import React, {createContext, useState} from 'react';

export const MyContext = createContext();

export const ContextProvider = ({children}: any) => {
  const [appState, setAppState] = useState({
    user: null,
  });

  const updateAppState = (key: string, value: any) => {
    setAppState(prev => ({...prev, [key]: value}));
  };

  return (
    <MyContext.Provider value={{appState, updateAppState}}>
      {children}
    </MyContext.Provider>
  );
};
