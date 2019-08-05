import * as React from 'react';
import { HoursContext } from '../../context/Hours';
import { HourRateContext } from '../../context/HourRate';
import style from './index.module.css';

const Total = () => {
  const { hours } = React.useContext(HoursContext);
  const { hourRate } = React.useContext(HourRateContext);
  const totalHours = hours.reduce((acc, h) => acc + Number(h), 0);

  return (
    <div className={style.total}>
      Totally:&nbsp;
      <span>{totalHours}</span>h
      x ${hourRate}
      = $<span>{totalHours * Number(hourRate)}</span>
    </div>
  );
};

Total.defaultProps = {
};

export default Total;
