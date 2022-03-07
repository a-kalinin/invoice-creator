import * as React from 'react';

export const InvoiceContext = React.createContext({
  date: '',
  setDate: () => {},
  number: '',
  setNumber: () => {},
  contractType: '',
  setContractType: () => {},
});
