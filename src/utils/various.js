import dateformat from 'dateformat';

export const generateFileName = (filenamePrefix, year, month) => (
  `${filenamePrefix}_${dateformat(new Date(year, month), 'yyyy_mm')}.pdf`
);
