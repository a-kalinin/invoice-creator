import { getInvoiceNumber } from '../various';

describe('utils/various', () => {
  describe('getInvoiceNumber', () => {
    it('returns 1 for January', () => {
      expect(getInvoiceNumber('2019-01-01', '2020-01-01')).toBe(1);
    });

    it('returns 1 when contract started month ago', () => {
      expect(getInvoiceNumber('2020-04-01', '2020-05-01')).toBe(1);
    });

    it('returns 3 and 5 for May', () => {
      expect(getInvoiceNumber('2020-02-01', '2020-05-01')).toBe(3);
      expect(getInvoiceNumber('2019-01-01', '2020-05-01')).toBe(5);
    });

    it('returns 10 and 12 for December', () => {
      expect(getInvoiceNumber('2020-02-01', '2020-12-01')).toBe(10);
      expect(getInvoiceNumber('2019-10-01', '2020-12-01')).toBe(12);
    });
  });
});
