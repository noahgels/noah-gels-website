import React from 'react';

const context = {
  animated: false,
}

const MainContext = React.createContext(context);
const MainProvider = MainContext.Provider;

export { MainContext, context, MainProvider };