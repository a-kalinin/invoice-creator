import * as Dates from '../Dates';

describe('Dates', () => {
  describe('getStartDay ', () => {
    test('returns week day for first day in given month', () => {
      const year = 2019;
      const month = 8;
      expect(Dates.getStartDay(year, month)).toBe(0);
      const month2 = 7;
      expect(Dates.getStartDay(year, month2)).toBe(4);
    });
  });

  describe('getWeeksCount2 ', () => {
    test('returns affected weeks\' count in August, 2019', () => {
      const year = 2019;
      const month = 7;
      expect(Dates.getWeeksCount2(year, month)).toBe(5);
    });
    test('returns affected weeks\' count in September, 2019', () => {
      const year = 2019;
      const month2 = 8;
      expect(Dates.getWeeksCount2(year, month2)).toBe(6);
    });
    test('returns affected weeks\' count in October, 2019', () => {
      const year = 2019;
      const month2 = 9;
      expect(Dates.getWeeksCount2(year, month2)).toBe(5);
    });
    test('returns affected weeks\' count in December, 2019', () => {
      const year = 2019;
      const month2 = 11;
      expect(Dates.getWeeksCount2(year, month2)).toBe(6);
    });
  });

  describe('getFirstDateInWeek ', () => {
    test('returns first date in week 1, August, 2019', () => {
      const year = 2019;
      const month = 7;
      expect(Dates.getFirstDateInWeek(year, month, 0)).toBe(1);
    });
    test('returns first date in week 2, August, 2019', () => {
      const year = 2019;
      const month = 7;
      expect(Dates.getFirstDateInWeek(year, month, 1)).toBe(5);
    });
    test('returns first date in week 3, August, 2019', () => {
      const year = 2019;
      const month = 7;
      expect(Dates.getFirstDateInWeek(year, month, 2)).toBe(12);
    });
  });

  describe('getFormattedDayOfDate ', () => {
    test('returns 0 for August 5th, 2019', () => {
      const year = 2019;
      const month = 7;
      const date = 5;
      expect(Dates.getFormattedDayOfDate(year, month, date)).toBe(0);
    });
    test('returns 5 for August 10th, 2019', () => {
      const year = 2019;
      const month = 7;
      const date = 10;
      expect(Dates.getFormattedDayOfDate(year, month, date)).toBe(5);
    });
    test('returns 6 for August 11th, 2019', () => {
      const year = 2019;
      const month = 7;
      const date = 11;
      expect(Dates.getFormattedDayOfDate(year, month, date)).toBe(6);
    });
    test('returns 6 for September 1st, 2019', () => {
      const year = 2019;
      const month = 8;
      const date = 1;
      expect(Dates.getFormattedDayOfDate(year, month, date)).toBe(6);
    });
  });
});
