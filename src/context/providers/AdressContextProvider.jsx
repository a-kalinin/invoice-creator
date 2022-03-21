import React from 'react';
import PropTypes from 'prop-types';
import { AddressContext } from '../Address';

const AdressContextProvider = ({
                                 children,
                               }) => {
  return (
    <AddressContext.Provider
      value={{}}
    >
      {children}
    </AddressContext.Provider>
  );
};

AdressContextProvider.propTypes = {
  /** Content */
  children: PropTypes.node,
};

AdressContextProvider.defaultProps = {};

export default AdressContextProvider;
