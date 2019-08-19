import * as React from 'react';
import dateformat from 'dateformat';
import { AddressContext } from '../../context/Address';
import { InvoiceContext } from '../../context/Invoice';
import { DateContext } from '../../context/Date';
import { filenamePrefix } from '../../utils/constants';
import { generateFileName } from '../../utils/various';
import styles from './index.module.css';

const InvoiceData = () => (
  <DateContext.Consumer>
    {({ month, year }) => (
      <InvoiceContext.Consumer>
        {({ date, setDate, number, setNumber }) => {
          const onDateChange = (e) => {
            setDate(e.target.value);
          };

          const onNumberChange = (e) => {
            setNumber(e.target.value);
          };

          return (
            <AddressContext.Consumer>
              {({ my, myName, myBankSwift, myBankAccount, contrAgent }) => (
                <div className={styles.root}>
                  <div><strong>Invoice Date:</strong></div>
                  <input value={date} onChange={onDateChange} />
                  <br />
                  <br />

                  <div><strong>Invoice Number:</strong></div>
                  <input value={number} onChange={onNumberChange} />
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
              )}
            </AddressContext.Consumer>
          );
        }}
      </InvoiceContext.Consumer>
    )}
  </DateContext.Consumer>
);

InvoiceData.defaultProps = {
};

export default InvoiceData;
