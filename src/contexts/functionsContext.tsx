import React, { createContext, useContext } from 'react';

export const FunctionsContext = createContext({
  navigator: null,
});

// @ts-ignore
export const FunctionsProvider = ({ navigator, children }) => {
  return (
    <FunctionsContext.Provider value={{ navigator }}>
      {children}
    </FunctionsContext.Provider>
  );
};

export const useFunctions = () => {
  const context = useContext(FunctionsContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
