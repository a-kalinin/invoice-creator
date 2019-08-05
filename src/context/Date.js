import * as React from 'react';

export const DateContext = React.createContext({
  month: [],
  setMonth: () => {},
  year: [],
  setYear: () => {},
});