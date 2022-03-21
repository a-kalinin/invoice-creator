import * as React from 'react';

export const myData = [
  process.env.REACT_APP_MY_DATA_LINE_1,
  process.env.REACT_APP_MY_DATA_LINE_2,
  process.env.REACT_APP_MY_DATA_LINE_3,
  process.env.REACT_APP_MY_DATA_LINE_4,
  process.env.REACT_APP_MY_DATA_LINE_5,
].filter(Boolean).join("\n");

export const contrAgentData = [
  process.env.REACT_APP_CONTRAGENT_DATA_LINE_1,
  process.env.REACT_APP_CONTRAGENT_DATA_LINE_2,
  process.env.REACT_APP_CONTRAGENT_DATA_LINE_3,
  process.env.REACT_APP_CONTRAGENT_DATA_LINE_4,
  process.env.REACT_APP_CONTRAGENT_DATA_LINE_5,
].filter(Boolean).join("\n");

export const defaults = {
  myData,
  myName: process.env.REACT_APP_MY_NAME || '',
  myBankSwift: process.env.REACT_APP_MY_BANK_SWIFT || '',
  myBankAccount: process.env.REACT_APP_MY_BANK_ACCOUNT || '',
  contrAgent: contrAgentData,
}


export const AddressContext = React.createContext({
  my: defaults.myData,
  setMy: () => {},
  myName: defaults.myName,
  setMyName: () => {},
  myBankSwift: defaults.myBankSwift,
  setMyBankSwift: () => {},
  myBankAccount: defaults.myBankAccount,
  setMyBankAccount: () => {},
  contrAgent: defaults.contrAgent,
  setContrAgent: () => {},
});
