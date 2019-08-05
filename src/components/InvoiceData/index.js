import * as React from 'react';
import { AddressContext } from '../../context/Address';
import { InvoiceContext } from '../../context/Invoice';

const InvoiceData = () => (
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
          {({ my, myBankSwift, myBankAccount, contrAgent }) => (
            <div>
              <div><strong>Invoice Date:</strong></div>
              <input value={date} onChange={onDateChange} />
              <br />
              <div><strong>Invoice Number:</strong></div>
              <input value={number} onChange={onNumberChange} />
              <br />
              <div><strong>My Data:</strong></div>
              {my.map((el, i) => <div key={`${el}_${i}`}>{el}</div>)}
              <br />
              <div><strong>My Bank Details:</strong></div>
              <div>{myBankSwift}</div>
              <div>{myBankAccount}</div>
              <br />
              <div><strong>Contragent Data:</strong></div>
              {contrAgent.map((el, i) => <div key={`${el}_${i}`}>{el}</div>)}
            </div>
          )}
        </AddressContext.Consumer>
      );
    }}
  </InvoiceContext.Consumer>
);

InvoiceData.defaultProps = {
};

export default InvoiceData;
