import * as React from 'react';
import InvoiceMonthForm from '../../components/InvoiceMonthForm';
import InvoiceData from '../../components/InvoiceData';
import style from './index.module.css';
import PdfButton from '../../components/PdfButton';
import HourRateContractForm from '../../components/HourRateContractForm';
import InvoiceBaseContextProvider from '../../context/providers/InvoiceBaseContextProvider';
import HourRateContractContextProvider
  from '../../context/providers/HourRateContractContextProvider';
import MonthRateContractForm from '../../components/MonthRateContractForm';
import AddressContextProvider from '../../context/providers/AddressContextProvider';

const Landing = () => {
  return (
    <AddressContextProvider>
      <InvoiceBaseContextProvider>
        <HourRateContractContextProvider>
          <div className={style.flex}>
            <div>
              <InvoiceMonthForm />
              <HourRateContractForm />
              <MonthRateContractForm />
            </div>
            <div>
              <InvoiceData />
              <br />
              <PdfButton />
            </div>
          </div>
        </HourRateContractContextProvider>
      </InvoiceBaseContextProvider>
    </AddressContextProvider>
  );
};

Landing.defaultProps = {
};

export default Landing;
