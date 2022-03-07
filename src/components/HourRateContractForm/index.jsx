import React from 'react';
import PropTypes from 'prop-types';
import RateForm from '../RateForm';
import CalendarView from '../CalendarView';
import Total from '../Total';

const HourRateContractForm = () => {
  return (
    <div>
      <RateForm />
      <br />
      <CalendarView />
      <br />
      <br />
      <Total />
    </div>
  );
};

HourRateContractForm.propTypes = {
  /** Content */
  children: PropTypes.node,
};

HourRateContractForm.defaultProps = {};

export default HourRateContractForm;
