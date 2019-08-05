import * as React from 'react';
import classNames from 'classnames';
import { HoursContext } from '../../context/Hours';
import style from './index.module.css';

const Day = ({ date }) => {
  const onFocus = (event) => {
    event.target.setSelectionRange(0, 2);
  };

  return (
    <HoursContext.Consumer>
      {({hours, setHours}) => {
        const currentHours = hours[date - 1];
        const onChange = (event) => {
          const value = event.target.value;
          const newValue = value
            .replace(/\D/g, '')
            .replace(/^0/g, '')
            .substr(0, 2);
          const newHours = hours.concat([]);
          newHours[date - 1] = newValue;
          setHours(newHours);
        };

        const classes = classNames(style.dateInput, {
          [style.empty]: currentHours === '',
          [style.normal]: currentHours === '8',
          [style.higher]: currentHours && Number(currentHours) > 8,
          [style.lower]: currentHours && Number(currentHours) < 8,
        });

        return (
          <input
            className={classes}
            value={currentHours || ''}
            onChange={onChange}
            onFocus={onFocus}
          />
        );
      }}
    </HoursContext.Consumer>
  );
};

Day.defaultProps = {
};

export default Day;
