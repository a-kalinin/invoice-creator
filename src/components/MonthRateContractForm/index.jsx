import React from 'react';
import PropTypes from 'prop-types';
import { InvoiceContext } from '../../context/Invoice';
import { CONTRACT_TYPES } from '../../utils/constants';
import MonthRateForm from '../MonthRateForm';

const MonthRateContractForm = () => {
  const { contractType } = React.useContext(InvoiceContext);
  return contractType === CONTRACT_TYPES.MONTH_RATE && (
    <div>
      <MonthRateForm />
    </div>
  );
};

MonthRateContractForm.propTypes = {
  /** Content */
  children: PropTypes.node,
};

MonthRateContractForm.defaultProps = {};

export default MonthRateContractForm;
