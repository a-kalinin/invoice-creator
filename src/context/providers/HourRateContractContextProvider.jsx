import React from 'react';
import PropTypes from 'prop-types';
import { getInitialHours } from '../../utils/Dates';
import { HoursContext } from '../Hours';
import { HourRateContext } from '../HourRate';
import { DateContext } from '../Date';
import { MonthRateContext } from '../MonthRate';

const HourRateContractContextProvider = ({ children }) => {
  const { year, month } = React.useContext(DateContext);
  const [monthRate, setMonthRate] = React.useState('2500');
  const [hourRate, setHourRate] = React.useState('25');
  const [hours, setHours] = React.useState(getInitialHours(year, month));

  React.useEffect(() => { setHours(getInitialHours(year, month)); }, [month, year]);

  return (
    <MonthRateContext.Provider value={{ monthRate, setMonthRate }}>
      <HoursContext.Provider value={{ hours, setHours }}>
        <HourRateContext.Provider value={{ hourRate, setHourRate }}>
          {children}
        </HourRateContext.Provider>
      </HoursContext.Provider>
    </MonthRateContext.Provider>
  );};

HourRateContractContextProvider.propTypes = {
  /** Content */
  children: PropTypes.node,
};

HourRateContractContextProvider.defaultProps = {};

export default HourRateContractContextProvider;
