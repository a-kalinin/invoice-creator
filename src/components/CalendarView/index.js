import * as React from 'react';
import * as Dates from '../../utils/Dates';
import Week from '../Week';
import style from './index.module.css';
import { monthsShort } from '../../utils/constants';
import { DateContext } from '../../context/Date';

const CalendarView = () => {
  const { year, month } = React.useContext(DateContext);
  const weeksCount = Dates.getWeeksCount2(year, month);

  return (
    <div className={style.root}>
      <div className={style.value}>{monthsShort[month]}<br />{year}</div>
      <table className={style.table}>
        <thead>
          <tr>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => <th key={day}>{day}</th>)}
            {['Sat', 'Sun'].map(day => <th key={day} className={style.weekend}>{day}</th>)}
          </tr>
        </thead>
        <tbody>
          {
            new Array(weeksCount).fill(null).map((el, i) => (
              <Week key={i} index={i} month={month} year={year} />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

CalendarView.defaultProps = {
};

export default CalendarView;
