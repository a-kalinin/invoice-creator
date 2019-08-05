import * as React from 'react';
import { DateContext } from '../../context/Date';
import { HourRateContext } from '../../context/HourRate';
import style from './index.module.css';
import { monthsShort } from '../../utils/constants';

const DateAndRateForm = () => {
  const onFocus = (event) => {
    event.target.setSelectionRange(0, 4);
  };

  return (
    <DateContext.Consumer>
      {({year, setYear, month, setMonth}) => (
        <HourRateContext.Consumer>
          {({hourRate, setHourRate}) => (
            <div>

              <div>
                Year:
                <input
                  className={style.yearInput}
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  onFocus={onFocus}
                />
              </div>
              <br />

              <div>
                Month:
                {new Array(12).fill(null).map((el, i) => (
                  <button
                    key={i}
                    className={`${style.monthBtn} ${i === month ? style.active : ''}`}
                    type="button"
                    onClick={() => setMonth(i)}
                  >
                    {monthsShort[i]}
                  </button>
                ))}
              </div>
              <br />

              <div>
                Hour rate:
                <input
                  className={style.yearInput}
                  value={hourRate}
                  onChange={(e) => setHourRate(e.target.value)}
                  onFocus={onFocus}
                />
              </div>

            </div>
          )}
        </HourRateContext.Consumer>
      )}
    </DateContext.Consumer>
  );
};

DateAndRateForm.defaultProps = {
};

export default DateAndRateForm;
