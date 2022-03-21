import React from 'react';
import { AddressContext } from '../../context/Address';
import { InvoiceContext } from '../../context/Invoice';
import { DateContext } from '../../context/Date';
import { generateFileName } from '../../utils/various';
import { parseDateYYYYMMDD } from '../../utils/Dates';
import styles from './index.module.css';
import EditableDiv from '../EditableDiv/EditableDiv';

const InvoiceData = () => {
  const { month, year } = React.useContext(DateContext);
  const {
    date,
    setDate,
    number,
    setNumber,
    contractDate,
    setContractDate,
    filePrefix,
    setFilePrefix,
  } = React.useContext(InvoiceContext);
  const {
    my,
    setMy,
    myName,
    setMyName,
    myBankSwift,
    setMyBankSwift,
    myBankAccount,
    setMyBankAccount,
    contrAgent,
    setContrAgent,
  } = React.useContext(AddressContext);
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
      <EditableDiv content={myName} onChange={setMyName} />
      <br />

      <div><strong>My Data:</strong> <small>(change in .env or .env.local)</small></div>
      <EditableDiv onChange={setMy} content={my} />
      <br />

      <div><strong>My Bank Details:</strong> <small>(change in .env or .env.local)</small></div>
      <EditableDiv onChange={setMyBankSwift} content={myBankSwift} />
      <EditableDiv onChange={setMyBankAccount} content={myBankAccount} />
      <br />

      <div><strong>Contragent Data:</strong> <small>(change in .env or .env.local)</small></div>
      <EditableDiv onChange={setContrAgent} content={contrAgent} />
      <br />

      <div><strong>Filename Prefix:</strong> <small>(change in .env or .env.local)</small></div>
      <EditableDiv onChange={setFilePrefix} content={filePrefix} />
      <br />

      <div><strong>Generated Filename:</strong></div>
      <div>{generateFileName(filePrefix, year, month)}</div>
    </div>
  );
}

InvoiceData.defaultProps = {
};

export default InvoiceData;
