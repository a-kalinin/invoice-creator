import * as React from 'react';
import { DateContext } from '../../context/Date';
import style from './index.module.css';
import { CONTRACT_TYPES, monthsShort } from '../../utils/constants';
import { InvoiceContext } from '../../context/Invoice';

const InvoiceMonthForm = () => {
  const onFocus = (event) => {
    event.target.setSelectionRange(0, 4);
  };
  const { contractType, setContractType } = React.useContext(InvoiceContext);
  const { year, setYear, month, setMonth } = React.useContext(DateContext);

  return (
    <div>
      <div>
        Contract type:
        {Object.keys(CONTRACT_TYPES).map((el, i) => (
          <button
            key={el}
            className={`${style.monthBtn} ${el === contractType ? style.active : ''}`}
            type="button"
            onClick={() => setContractType(el)}
          >
            {el}
          </button>
        ))}
      </div>
      <br />

      {contractType !== CONTRACT_TYPES.FIXED && (
        <React.Fragment>
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
        </React.Fragment>
      )}
    </div>
  );
};

InvoiceMonthForm.defaultProps = {
};

export default InvoiceMonthForm;
