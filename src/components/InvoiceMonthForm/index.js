import * as React from 'react';
import { DateContext } from '../../context/Date';
import style from './index.module.css';
import { monthsShort } from '../../utils/constants';

const InvoiceMonthForm = () => {
  const onFocus = (event) => {
    event.target.setSelectionRange(0, 4);
  };
  const { year, setYear, month, setMonth } = React.useContext(DateContext);

  return (
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
    </div>
  );
};

InvoiceMonthForm.defaultProps = {
};

export default InvoiceMonthForm;
