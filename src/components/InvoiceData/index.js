import React from 'react';
import dateformat from 'dateformat';
import { AddressContext } from '../../context/Address';
import { InvoiceContext } from '../../context/Invoice';
import { DateContext } from '../../context/Date';
import { filenamePrefix } from '../../utils/constants';
import { generateFileName } from '../../utils/various';
import { parseDateYYYYMMDD } from '../../utils/Dates';
import styles from './index.module.css';
import DateInput from '../DateInput';

const InvoiceData = () => {
  const { month, year } = React.useContext(DateContext);
  const { date, setDate, number, setNumber, contractDate, setContractDate } = React.useContext(InvoiceContext);
  const { my, myName, myBankSwift, myBankAccount, contrAgent } = React.useContext(AddressContext);
  const onDateChange = (e) => {
    setDate(e.target.value);
  };

  const onNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const onContractDateChange = (e) => {
    setContractDate(e.target.value);
  };

  return (
    <div className={styles.root}>
      <div><strong>Invoice Date:</strong></div>
      <input type="date" value={date} onChange={onDateChange} />
      <br />
      <br />

      <div><strong>Invoice Number:</strong></div>
      <input value={number} onChange={onNumberChange} />
      <br />
      <br />

      <div><strong>Contract Date:</strong></div>
      <input type="date" value={contractDate} onChange={onContractDateChange} />
      {!parseDateYYYYMMDD(contractDate) && ' Can\'t parse date'}
      <br />
      <br />

      <div><strong>My Name:</strong> <small>(change in .env or .env.local)</small></div>
      <div>{myName}</div>
      <br />

      <div><strong>My Data:</strong> <small>(change in .env or .env.local)</small></div>
      {my.map((el, i) => <div key={`${el}_${i}`}>{el}</div>)}
      <br />

      <div><strong>My Bank Details:</strong> <small>(change in .env or .env.local)</small></div>
      <div>{myBankSwift}</div>
      <div>{myBankAccount}</div>
      <br />

      <div><strong>Contragent Data:</strong> <small>(change in .env or .env.local)</small></div>
      {contrAgent.map((el, i) => <div key={`${el}_${i}`}>{el}</div>)}
      <br />

      <div><strong>Filename:</strong> <small>(change in .env or .env.local)</small></div>
      <div>{generateFileName(filenamePrefix, year, month)}</div>
    </div>
  );
}

InvoiceData.defaultProps = {
};

export default InvoiceData;
