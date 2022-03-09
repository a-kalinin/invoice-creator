import React from 'react';
import PropTypes from 'prop-types';
import LocalStorageUsage from '../utils/LocalStorageUsage';

/**
 * Hook. Saves passed data in local storage.
 * In case when data exists on hook mounting - returns saved data.
 * IMPORTANT: passed value should be serializable, it will be JSON-stringified, parsed and returned.
 * */
function useLocalStorage(storageName, dataToSave) {
  const [storage, setStorage] = React.useState(new LocalStorageUsage(storageName, dataToSave));
  const [prevDataJson, setPrevDataJson] = React.useState(JSON.stringify(dataToSave));
  const [prevStorageName, setPrevStorageName] = React.useState(storageName);

  React.useEffect(() => {
    if (prevStorageName !== storageName) {
      setStorage(new LocalStorageUsage(storageName, dataToSave));
      setPrevStorageName(storageName);
    }
  }, [dataToSave, prevStorageName, storageName]);

  React.useEffect(() => {
    const dataJson = JSON.stringify(dataToSave);
    if (prevDataJson !== dataJson) {
      storage.set(dataToSave);
      setPrevDataJson(dataJson);
    }
  }, [dataToSave, prevDataJson, storage]);

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
