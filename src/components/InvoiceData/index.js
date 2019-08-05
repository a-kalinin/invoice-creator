import * as React from 'react';
import { AddressContext } from '../../context/Address';

const InvoiceData = ({}) => {
  return (
    <AddressContext.consumer>
      {({ my, myBankSwift, myBankAccount, contrAgent }) => {

      }}
    </AddressContext.consumer>
  );
};

InvoiceData.defaultProps = {
};

export default InvoiceData;
