import * as React from 'react';
import InvoiceMonthForm from '../../components/InvoiceMonthForm';
import InvoiceData from '../../components/InvoiceData';
import style from './index.module.css';
import PdfButton from '../../components/PdfButton';
import HourRateContractForm from '../../components/HourRateContractForm';
import InvoiceBaseContextProvider from '../../context/providers/InvoiceBaseContextProvider';
import HourRateContractContextProvider
  from '../../context/providers/HourRateContractContextProvider';
import { InvoiceContext } from '../../context/Invoice';
import { CONTRACT_TYPES } from '../../utils/constants';

const Landing = () => {
  return (
    <InvoiceBaseContextProvider>
      <HourRateContractContextProvider>
        <div className={style.flex}>
          <div>
            <InvoiceMonthForm />
            <HourRateContractForm />
          </div>
          <div>
            <InvoiceData />
            <br />
            <PdfButton />
          </div>
        </div>
      </HourRateContractContextProvider>
    </InvoiceBaseContextProvider>
  );
};

Landing.defaultProps = {
};

export default Landing;
