import * as React from 'react';
import * as Dates from '../../utils/Dates';
import Day from '../Day';
import style from './index.module.css';

const Week = ({ year, month, index }) => {
  const startDate = Dates.getFirstDateInWeek(year, month, index);
  const startDateDay = startDate !== 1 ? 0 : Dates.getFormattedDayOfDate(year, month, startDate);
  const monthLength = Dates.getDaysCount(year, month);
  const createDates =
    (length) => new Array(length)
      .fill(null)
      .map((el, i) => {
        const date = startDate + i;
        return date > monthLength ? null : date;
      });
  const dates = startDateDay === 0
    ? createDates(7)
    : new Array(startDateDay)
      .fill(null)
      .concat(
        createDates(7 - startDateDay),
      );

  const renderTd = (day, i) => (
    <td key={`${year}_${month}_${index}_${i}`} className={[5, 6].includes(i) ? style.weekend : ''}>
      {day}
    </td>
  );
  const renderInput = (day, i) => (
    <td key={`${year}_${month}_${index}_${i}`} className={[5, 6].includes(i) ? style.weekend : ''}>
      {day !== null && <Day date={day} />}
    </td>
  );

  return (
    <>
      <tr>
        {dates.map(renderTd)}
      </tr>
      <tr>
        {dates.map(renderInput)}
      </tr>
    </>
  );
};

Week.defaultProps = {
};

export default Week;
