import React, { createContext, useContext } from 'react';

export const FunctionsContext = createContext({
  onFinish: () => null,
});

// @ts-ignore
export const FunctionsProvider = ({ onFinish, children }) => {
  return (
    <FunctionsContext.Provider value={{ onFinish }}>
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
