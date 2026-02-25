'use client';

import { createContext, useState } from 'react';

const BasicContext = createContext({
  strings: 0,
  setStrings: () => {},
  settings: 0,
  setSettings: () => {}
});

const BasicProvider = ({ children }) => {
  const [strings, setStrings] = useState({});
  const [settings, setSettings] = useState({});

  return (
    <BasicContext.Provider value={{ strings, setStrings, settings, setSettings }}>
      {children}
    </BasicContext.Provider>
  );
};

export { BasicContext, BasicProvider };