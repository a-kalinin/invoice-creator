import * as React from 'react';

const myData = [
  process.env.REACT_APP_MY_DATA_LINE_1,
  process.env.REACT_APP_MY_DATA_LINE_2,
  process.env.REACT_APP_MY_DATA_LINE_3,
  process.env.REACT_APP_MY_DATA_LINE_4,
  process.env.REACT_APP_MY_DATA_LINE_5,
].filter(Boolean);

const contrAgentData = [
  process.env.REACT_APP_CONTRAGENT_DATA_LINE_1,
  process.env.REACT_APP_CONTRAGENT_DATA_LINE_2,
  process.env.REACT_APP_CONTRAGENT_DATA_LINE_3,
  process.env.REACT_APP_CONTRAGENT_DATA_LINE_4,
  process.env.REACT_APP_CONTRAGENT_DATA_LINE_5,
].filter(Boolean);

export const AddressContext = React.createContext({
  my: myData,
  myName: process.env.REACT_APP_MY_NAME,
  myBankSwift: process.env.REACT_APP_MY_BANK_SWIFT || '',
  myBankAccount: process.env.REACT_APP_MY_BANK_ACCOUNT || '',
  contrAgent: contrAgentData,
});