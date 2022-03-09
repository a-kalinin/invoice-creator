import React from 'react';
import PropTypes from 'prop-types';
import LocalStorageUsage from '../utils/LocalStorageUsage';

/**
 * Hook. Saves passed data in local storage.
 * In case when data exists on hook mounting - returns saved data.
 * IMPORTANT: passed value should be serializable, it will be JSON-stringified, parsed and returned.
 * */
function useLocalStorage(storageName, dataToSave) {
  const storage = new LocalStorageUsage(storageName, dataToSave);
  const [prevDataJson, setPrevDataJson] = React.useState(JSON.stringify(dataToSave));
  const [prevStorageName, setPrevStorageName] = React.useState(storageName);
  const dataJson = JSON.stringify(dataToSave);

  if (prevDataJson !== dataJson && prevStorageName === storageName) {
    storage.set(dataToSave);
    setPrevDataJson(dataJson);
  } else if (prevStorageName !== storageName) {
    setPrevStorageName(storageName);
  }

  return storage.get();
}

useLocalStorage.propTypes = {
  /** Storage key name */
  storageName: PropTypes.string.isRequired,
  /** Storage value */
  // eslint-disable-next-line react/forbid-prop-types
  dataToSave: PropTypes.any,
};

useLocalStorage.defaultProps = {
};

export default useLocalStorage;
