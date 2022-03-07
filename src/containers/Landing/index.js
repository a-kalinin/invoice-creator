import * as React from 'react';
import dateformat from 'dateformat';
import CalendarView from '../../components/CalendarView';
import InvoiceMonthForm from '../../components/InvoiceMonthForm';
import Total from '../../components/Total';
import InvoiceData from '../../components/InvoiceData';
import * as Dates from '../../utils/Dates';
import { HoursContext } from '../../context/Hours';
import { DateContext } from '../../context/Date';
import { HourRateContext } from '../../context/HourRate';
import { InvoiceContext } from '../../context/Invoice';
import { contractDate } from '../../utils/constants';
import style from './index.module.css';
import PdfButton from '../../components/PdfButton';
import RateForm from '../../components/RateForm';

const Landing = () => {
  const initYear = new Date().getFullYear();
  const initMonth = new Date().getMonth() - 1;

  const [year, setYearPure] = React.useState(new Date(initYear, initMonth).getFullYear());
  const [month, setMonth] = React.useState(new Date(initYear, initMonth).getMonth());
  const [hourRate, setHourRate] = React.useState('25');
  const [date, setDate] = React.useState(dateformat('dd.mm.yyyy'));
  const [number, setNumber] = React.useState(Dates.countMonthsSinceDate(contractDate));
  const [hours, setHours] = React.useState(Dates.getInitialHours(year, month));

  React.useEffect(() => { setHours(Dates.getInitialHours(year, month)); }, [month, year]);

  const setYear = (value) => {
    setYearPure(value.replace(/\D/g, '').replace(/^0/g, '').substr(0, 4));
  };

  return (
    <InvoiceContext.Provider value={{ date, setDate, number, setNumber }}>
      <HoursContext.Provider value={{ hours, setHours }}>
        <DateContext.Provider value={{ year, setYear, month, setMonth }}>
          <HourRateContext.Provider value={{ hourRate, setHourRate }}>
            <div className={style.flex}>
              <div>
                <InvoiceMonthForm />
                <RateForm />
                <br />
                <CalendarView />
                <br />
                <br />
                <Total />
              </div>
              <div>
                <InvoiceData />
                <br />
                <PdfButton />
              </div>
            </div>
          </HourRateContext.Provider>
       </DateContext.Provider>
      </HoursContext.Provider>
    </InvoiceContext.Provider>
  );
};

Landing.defaultProps = {
};

export default Landing;
