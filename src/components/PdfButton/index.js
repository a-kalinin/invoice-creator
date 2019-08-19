import * as React from 'react';
import { AddressContext } from '../../context/Address';
import { InvoiceContext } from '../../context/Invoice';
import { DateContext } from '../../context/Date';
import { HoursContext } from '../../context/Hours';
import { HourRateContext } from '../../context/HourRate';
import { filenamePrefix } from '../../utils/constants';
import { createPdf } from '../../utils/pdf';
import styles from './index.module.css';

const PdfButton = () => {
  const { my, myName, myBankSwift, myBankAccount, contrAgent } = React.useContext(AddressContext);
  const { date, number } = React.useContext(InvoiceContext);
  const { month, year } = React.useContext(DateContext);
  const { hours } = React.useContext(HoursContext);
  const { hourRate } = React.useContext(HourRateContext);

  const onClick = () => {
    const data = {
      number,
      date,
      myName,
      my,
      myBankSwift,
      myBankAccount,
      contrAgent,
      hours,
      month,
      year,
      hourRate,
      filenamePrefix,
    };
    createPdf(data);
  };

  return (
    <button type="button" className={styles.button} onClick={onClick}>
      Save PDF
    </button>
  );
};

export default PdfButton;
