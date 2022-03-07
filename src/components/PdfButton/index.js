import * as React from 'react';
import { AddressContext } from '../../context/Address';
import { InvoiceContext } from '../../context/Invoice';
import { DateContext } from '../../context/Date';
import { HoursContext } from '../../context/Hours';
import { HourRateContext } from '../../context/HourRate';
import { CONTRACT_TYPES, filenamePrefix } from '../../utils/constants';
import { createPdf, createPdf2 } from '../../utils/pdf';
import styles from './index.module.css';
import { MonthRateContext } from '../../context/MonthRate';

const PdfButton = () => {
  const { my, myName, myBankSwift, myBankAccount, contrAgent } = React.useContext(AddressContext);
  const { date, number, contractType } = React.useContext(InvoiceContext);
  const { month, year } = React.useContext(DateContext);
  const { hours } = React.useContext(HoursContext);
  const { hourRate } = React.useContext(HourRateContext);
  const { monthRate } = React.useContext(MonthRateContext);

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
      monthRate,
      filenamePrefix,
    };
    if (contractType === CONTRACT_TYPES.HOUR_RATE) createPdf(data);
    else if (contractType === CONTRACT_TYPES.MONTH_RATE) createPdf2(data);
  };

  return (
    <button type="button" className={styles.button} onClick={onClick}>
      Save PDF
    </button>
  );
};

export default PdfButton;
