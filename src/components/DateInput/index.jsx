import React from 'react';
import PropTypes from 'prop-types';

const DateInput = ({ value: valueProp, onChange: onChangeProp, ...props }) => {
  const ref = React.useRef(null);
  const [value, setValue] = React.useState(valueProp);
  const [position, setPosition] = React.useState(null);

  const onChange = (e) => {
    const val = e.target.value;
    const selStart = e.target.selectionStart;
    const selEnd = e.target.selectionEnd;
    const digits = val.replace(/\D/g, '');
    let newValue = digits.substring(0, 2);
    if (digits.length > 2) newValue += '.' + digits.substring(2,4);
    if (digits.length > 4) newValue += '.' + digits.substring(4, 8);

    console.log(`%c digits/selStart/selEnd`, "color: cyan; font-weight: bold", selStart, selEnd);

    if (selStart === selEnd && [2,4].includes(selStart)) {
      setPosition(selStart);
      e.target.selectionStart += 1;
    } else {
      setPosition(null);
    }
    setValue(newValue);
    onChangeProp(newValue);
  };

  React.useEffect(() => {

  }, []);

  return (
    <input ref={ref} type="date" {...props} value={value} onChange={onChange}/>
  );
};

DateInput.propTypes = {
  /** Content */
  children: PropTypes.node,
  value: PropTypes.string,
};

DateInput.defaultProps = {};

export default DateInput;
