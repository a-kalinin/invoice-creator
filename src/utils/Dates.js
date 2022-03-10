export const getStartDateObj = (year, month) => new Date(year, month, 1);

export const getStartDay = (startDate) => startDate.getDay();

export const getStartDay2 = (year, month) => {
  const startDate = getStartDateObj(year, month);
  return getStartDay(startDate);
};

export const getFormattedDay = (day) => day === 0 ? 6 : day - 1;

export const getDaysCount = (year, month) => new Date(year, month + 1, 0).getDate();

export const getWeeksCount = (daysCount, startDayOfWeek) => {
  const startDOW = getFormattedDay(startDayOfWeek);
  return Math.ceil((daysCount + startDOW) / 7);
};

export const getWeeksCount2 = (year, month) => {
  const startDay = getStartDay2(year, month);
  const daysCount = getDaysCount(year, month);
  return getWeeksCount(daysCount, startDay);
};

export const getFirstDateInWeek = (year, month, week) => {
  if (week === 0) return 1;
  const dateInWeek = 1 + week * 7;
  const dateInWeekObj = new Date(year, month, dateInWeek);
  const day = dateInWeekObj.getDay();
  const formattedDay = getFormattedDay(day);
  return dateInWeek - formattedDay;
};

export const getFormattedDayOfDate = (year, month, date) => {
  const obj = new Date(year, month, date);
  return getFormattedDay(obj.getDay());
};

export const getInitialHours = (year, month) => {
  const daysCount = getDaysCount(year, month);
  return new Array(daysCount)
    .fill('')
    .map((el, i) => {
      const formattedDay = getFormattedDayOfDate(year, month, i + 1);
      return formattedDay < 5 ? '8' : '';
    });
};

export const parseDateYYYYMMDD = (dateString) => {
  return /\d\d\d\d[-.]\d\d[-.]\d\d/.test(dateString) ? new Date(dateString) : null;
}

export const getInvoiceNumber = (contractDate) => {
  const contractDateObj = parseDateYYYYMMDD(contractDate);
  const now = new Date();
  const yearStartDate = new Date(String(now.getFullYear()));
  const start = contractDateObj && contractDateObj > yearStartDate ? contractDateObj : yearStartDate;
  return now.getMonth() - start.getMonth() + (12 * (now.getFullYear() - start.getFullYear()));
}

export const get = (year, month) => {
  const startDate = getStartDateObj(year, month);
  const startDay = getStartDay(startDate);
  const daysCount = getDaysCount(year, month);
  const weeksCount = getWeeksCount(daysCount, startDay);
  return {
    startDate,
    startDay,
    daysCount,
    weeksCount,
  };
};
