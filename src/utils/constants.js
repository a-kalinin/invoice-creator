export const monthsShort =
  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const months =
  [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

export const workingDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export const weekendDays = ['Sat', 'Sun'];

export const contractDate = process.env.REACT_APP_CONTRACT_DATE;

export const filenamePrefix = process.env.REACT_APP_FILENAME_PREFIX;

export const CONTRACT_TYPES = {
  FIXED_PRICE: 'FIXED_PRICE',
  MONTH_RATE: 'MONTH_RATE',
  HOUR_RATE: 'HOUR_RATE',
}

export const STORAGE = {
  MONTH_RATE: 'MONTH_RATE',
}
