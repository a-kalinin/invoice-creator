import * as React from 'react';
import { HourRateContext } from '../../context/HourRate';
import style from './index.module.css';

const HourRateForm = () => {
  const onFocus = (event) => {
    event.target.setSelectionRange(0, 4);
  };
  const { hourRate, setHourRate } = React.useContext(HourRateContext);

  return (
    <div>
      <div>
        Hour rate:
        <input
          className={style.input}
          value={hourRate}
          onChange={(e) => setHourRate(e.target.value)}
          onFocus={onFocus}
        />
      </div>
    </div>
  );
};

HourRateForm.defaultProps = {
};

export default HourRateForm;
