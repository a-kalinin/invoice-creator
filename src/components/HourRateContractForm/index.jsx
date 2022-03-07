import React from 'react';
import PropTypes from 'prop-types';
import HourRateForm from '../HourRateForm';
import CalendarView from '../CalendarView';
import Total from '../Total';
import { InvoiceContext } from '../../context/Invoice';
import { CONTRACT_TYPES } from '../../utils/constants';

const HourRateContractForm = () => {
  const { contractType } = React.useContext(InvoiceContext);
  return contractType === CONTRACT_TYPES.HOUR_RATE && (
    <div>
      <HourRateForm />
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
