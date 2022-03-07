import React from 'react';
import PropTypes from 'prop-types';
import dateformat from 'dateformat';
import * as Dates from '../../utils/Dates';
import { CONTRACT_TYPES, contractDate } from '../../utils/constants';
import { InvoiceContext } from '../Invoice';
import { DateContext } from '../Date';

const InvoiceBaseContextProvider = ({ children }) => {
  const initYear = new Date().getFullYear();
  const initMonth = new Date().getMonth() - 1;

  const [contractType, setContractType] = React.useState(CONTRACT_TYPES.HOUR_RATE);
  const [year, setYearPure] = React.useState(new Date(initYear, initMonth).getFullYear());
  const [month, setMonth] = React.useState(new Date(initYear, initMonth).getMonth());
  const [date, setDate] = React.useState(dateformat('dd.mm.yyyy'));
  const [number, setNumber] = React.useState(Dates.countMonthsSinceDate(contractDate));

  const setYear = (value) => {
    setYearPure(value.replace(/\D/g, '').replace(/^0/g, '').substr(0, 4));
  };

  return (
    <InvoiceContext.Provider
      value={{
        date,
        setDate,
        number,
        setNumber,
        contractType,
        setContractType,
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
