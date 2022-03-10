import React from 'react';
import PropTypes from 'prop-types';
import dateformat from 'dateformat';
import { CONTRACT_TYPES, contractDate as initContractDate, STORAGE } from '../../utils/constants';
import { InvoiceContext } from '../Invoice';
import { DateContext } from '../Date';
import useLocalStorageState from '../../hooks/useLocalStorageState';
import { getInvoiceNumber } from '../../utils/various';

const InvoiceBaseContextProvider = ({ children }) => {
  const initYear = new Date().getFullYear();
  const initMonth = new Date().getMonth() - 1;

  const [contractType, setContractType] = useLocalStorageState(STORAGE.CONTRACT_TYPE, CONTRACT_TYPES.MONTH_RATE);
  const [contractDate, setContractDate] = useLocalStorageState(STORAGE.CONTRACT_DATE, initContractDate);
  const [year, setYearPure] = React.useState(new Date(initYear, initMonth).getFullYear());
  const [month, setMonth] = React.useState(new Date(initYear, initMonth).getMonth());
  const [date, setDate] = React.useState(dateformat('yyyy-mm-dd'));
  const [number, setNumber] = React.useState(getInvoiceNumber(contractDate));

  const setYear = (value) => {
    setYearPure(value.replace(/\D/g, '').replace(/^0/g, '').substr(0, 4));
  };

  React.useEffect(() => {
    setNumber(getInvoiceNumber(contractDate))
  }, [contractDate]);

  return (
    <InvoiceContext.Provider
      value={{
        date,
        setDate,
        number,
        setNumber,
        contractType,
        setContractType,
        contractDate,
        setContractDate,
      }}
    >
      <DateContext.Provider value={{ year, setYear, month, setMonth }}>
        {children}
      </DateContext.Provider>
    </InvoiceContext.Provider>
  );};

InvoiceBaseContextProvider.propTypes = {
  /** Content */
  children: PropTypes.node,
};

InvoiceBaseContextProvider.defaultProps = {};

export default InvoiceBaseContextProvider;
