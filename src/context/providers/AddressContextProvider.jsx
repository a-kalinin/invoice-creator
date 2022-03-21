import React from 'react';
import PropTypes from 'prop-types';
import { AddressContext, defaults } from '../Address';
import useLocalStorageState from '../../hooks/useLocalStorageState';
import { STORAGE } from '../../utils/constants';

const AddressContextProvider = ({ children }) => {
  const [my, setMy] = useLocalStorageState(STORAGE.MY_DATA, defaults.myData);
  const [myName, setMyName] = useLocalStorageState(STORAGE.MY_NAME, defaults.myName);
  const [mySwift, setMySwift] = useLocalStorageState(STORAGE.MY_SWIFT, defaults.myBankSwift);
  const [myAccount, setMyAccount] = useLocalStorageState(STORAGE.MY_ACCOUNT, defaults.myBankAccount);
  const [contrAgent, setContrAgent] = useLocalStorageState(STORAGE.CONTRAGENT, defaults.contrAgent);

  return (
    <AddressContext.Provider
      value={{
        my,
        setMy,
        myName,
        setMyName,
        myBankSwift: mySwift,
        setMyBankSwift: setMySwift,
        myBankAccount: myAccount,
        setMyBankAccount: setMyAccount,
        contrAgent,
        setContrAgent,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

AddressContextProvider.propTypes = {
  /** Content */
  children: PropTypes.node,
};

AddressContextProvider.defaultProps = {};

export default AddressContextProvider;
