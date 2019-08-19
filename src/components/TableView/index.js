import * as React from 'react';
import numeral from 'numeral';
import cn from 'classnames';
import { AddressContext } from '../../context/Address';
import { InvoiceContext } from '../../context/Invoice';
import { DateContext } from '../../context/Date';
import { HoursContext } from '../../context/Hours';
import { HourRateContext } from '../../context/HourRate';
import { filenamePrefix } from '../../utils/constants';
import { createPdf } from '../../utils/pdf';
import styles from './index.module.css';

const TableView = () => {
  const { my, myName, myBankSwift, myBankAccount, contrAgent } = React.useContext(AddressContext);
  const { date, number } = React.useContext(InvoiceContext);
  const { month, year } = React.useContext(DateContext);
  const { hours } = React.useContext(HoursContext);
  const { hourRate } = React.useContext(HourRateContext);
  const newNumber =
    /^\d+$/.test(number.toString())
      ? `00-${numeral(number).format('000000')}`
      : number;

  return (
    <table className={styles.root} id="tableView">
      <tbody>
        <tr className={styles.header}>
          <td />
          <td colSpan={5} className={styles.header1}>{myName}</td>
          <td colSpan={2} className={styles.header2}>INVOICE</td>
          <td />
        </tr>
        <tr className={styles.subheader}>
          <td />
          <td colSpan={4} className={styles.subheader1}>INVOICE #{newNumber}</td>
          <td colSpan={3} className={styles.subheader2}>DATE {date}</td>
          <td />
        </tr>
      </tbody>
    </table>
  );
};

export default TableView;
