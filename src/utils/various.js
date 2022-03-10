import dateformat from 'dateformat';
import { parseDateYYYYMMDD } from './Dates';

export const generateFileName = (filenamePrefix, year, month) => (
  `${filenamePrefix}_${dateformat(new Date(year, month), 'yyyy_mm')}.pdf`
);

export const getInvoiceNumber = (contractDate, invoiceDate) => {
  const contractDateObj = parseDateYYYYMMDD(contractDate);
  const invoiceDateObj = invoiceDate ? parseDateYYYYMMDD(invoiceDate) : new Date();
  const yearEndDateObj = new Date(invoiceDateObj.getFullYear(), 0, 1, -1);
  const start = contractDateObj && contractDateObj > yearEndDateObj
    ? contractDateObj
    : yearEndDateObj;
  return (invoiceDateObj.getMonth() - start.getMonth() + 12) % 12 || 12;
}
