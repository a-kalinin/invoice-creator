import React from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from './useLocalStorage';

/**
 * Hook. Saves passed data in local storage.
 * In case when data exists on hook mounting - returns saved data.
 * IMPORTANT: passed value should be serializable, it will be JSON-stringified, parsed and returned.
 */
function useLocalStorageState(storageName, initialState) {
  const [value, setValue] = React.useState(initialState);
  const storedValue = useLocalStorage(storageName, value);

  return [storedValue, setValue];
}

useLocalStorageState.propTypes = {
  /** Storage key name */
  storageName: PropTypes.string.isRequired,
  /** Storage value */
  // eslint-disable-next-line react/forbid-prop-types
  initialState: PropTypes.any,
};

useLocalStorageState.defaultProps = {
};

export default useLocalStorageState;
