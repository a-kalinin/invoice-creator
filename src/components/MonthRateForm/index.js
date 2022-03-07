import * as React from 'react';
import style from './index.module.css';
import { MonthRateContext } from '../../context/MonthRate';

const MonthRateForm = () => {
  const onFocus = (event) => {
    event.target.setSelectionRange(0, 4);
  };
  const { monthRate, setMonthRate } = React.useContext(MonthRateContext);

  return (
    <div>
      <div>
        Month rate:
        <input
          className={style.input}
          value={monthRate}
          onChange={(e) => setMonthRate(e.target.value)}
          onFocus={onFocus}
        />
      </div>
    </div>
  );
};

MonthRateForm.defaultProps = {
};

export default MonthRateForm;
