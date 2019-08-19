import Pdf from 'jspdf';
import 'jspdf-autotable';
import numeral from 'numeral';
import { months, weekendDays, workingDays } from './constants';
import { generateFileName } from './various';
import styles from './pdfStyles';
import * as Dates from './Dates';

class GenPdf {
  constructor(data, orientation = 'p') {
    this.data = data;
    this.doc = new Pdf({ orientation });
  }

  setData = (data) => {
    this.data = data;
  };

  static setLocaleToNumeral = () => {
    if (!numeral.locales.local) {
      numeral.register('locale', 'local', {
        delimiters: {
          thousands: ' ',
          decimal: ','
        },
        abbreviations: {
          thousand: 'k',
          million: 'm',
          billion: 'b',
          trillion: 't'
        },
        ordinal : function (number) {
          return '';
        },
        currency: {
          symbol: '$'
        }
      });
    }
    numeral.locale('local');
  };

  static produceFormatting = () => ([
    [
      { content: '', styles: styles.cell_1 },
      { content: '', styles: styles.cell_2 },
      { content: '', styles: styles.cell_3 },
      { content: '', styles: styles.cell_4 },
      { content: '', styles: styles.cell_5 },
      { content: '', styles: styles.cell_6 },
      { content: '', styles: styles.cell_7 },
      { content: '', styles: styles.cell_8 },
    ]
  ]);

  static produceHeader = ({ myName, newNumber, date }) => ([
    [
      { content: '', styles: styles.header1 },
      { content: myName, colSpan: 4, styles: styles.header2 },
      { content: 'INVOICE', colSpan: 2, styles: styles.header3 },
      { content: '', styles: styles.header1 },
    ],
    [
      { content: '', styles: styles.subheader1 },
      { content: `INVOICE #${newNumber}`, colSpan: 3, styles: styles.subheader2 },
      { content: `DATE ${date}`, colSpan: 3, styles: styles.subheader3 },
      { content: '', styles: styles.subheader1 },
    ],
  ]);

  static produceAddressArea = ({ my, contrAgent }) => ([
    [
      { content: '', colSpan: 8, styles: styles.infoEmpty },
    ],
    [
      { content: '', styles: styles.info1 },
      { content: 'MAILING', styles: styles.infoBanner1 },
      { content: my[0] || '', styles: styles.info1 },
      { content: 'BILL', styles: styles.infoBanner3 },
      { content: contrAgent[0] || '', colSpan: 3, styles: styles.info1 },
      { content: '', styles: styles.info1 },
    ],
    [
      { content: '', styles: styles.info1 },
      { content: 'INFO', styles: styles.infoBanner2 },
      { content: my[1] || '', styles: styles.info1 },
      { content: 'TO', styles: styles.infoBanner4 },
      { content: contrAgent[1] || '', colSpan: 3, styles: styles.info1 },
      { content: '', styles: styles.info1 },
    ],
    ...new Array(3).fill(null).map((el, i) => (
      [
        { content: '', styles: styles.info1 },
        { content: '', styles: styles.infoBanner2 },
        { content: my[2 + i] || '', styles: styles.info1 },
        { content: '', styles: styles.infoBanner4 },
        { content: contrAgent[2 + i] || '', colSpan: 3, styles: styles.info1 },
        { content: '', styles: styles.info1 },
      ]
    )),
    [
      { content: '', colSpan: 8, styles: styles.infoEmpty },
    ],
  ]);

  static produceTable = ({ jobString, hoursTotal, hourRate, amount }) => ([
    [
      { content: '', styles: styles.tableHeader },
      { content: 'HOURLY SERVICES', colSpan: 3, styles: styles.tableHeader },
      { content: 'HOURS', styles: styles.tableHeader2 },
      { content: 'RATE', styles: styles.tableHeader2 },
      { content: 'AMOUNT', styles: styles.tableHeader3 },
      { content: '', styles: styles.tableHeader },
    ],
    [
      { content: '', styles: styles.tableBody1 },
      { content: jobString, colSpan: 3, styles: styles.tableBody1 },
      { content: hoursTotal, styles: styles.tableBody2 },
      { content: hourRate, styles: styles.tableBody2 },
      { content: amount, styles: styles.tableBody3 },
      { content: '', styles: styles.tableBody1 },
    ],
  ]);

  static produceFooter = ({ amount }) => ([
    [
      { content: '', colSpan: 5, styles: styles.infoEmpty },
      { content: 'SUBTOTAL', styles: styles.tableFooter1 },
      { content: `$ ${amount}`, styles: styles.tableFooter5 },
      { content: '', styles: styles.infoEmpty },
    ],
    [
      { content: '', styles: styles.infoEmpty },
      { content: 'Not subject to VAT', colSpan: 4, styles: styles.info2 },
      { content: 'TAX RATE', styles: styles.tableFooter2 },
      { content: "0,000%", styles: styles.tableFooter6 },
      { content: '', styles: styles.infoEmpty },
    ],
    [
      { content: '', styles: styles.infoEmpty },
      { content: 'exempt VAT art. 7 TER-DPR 633/72', colSpan: 4, styles: styles.info2 },
      { content: 'TOTAL TAX', styles: styles.tableFooter3 },
      { content: "$ 0", styles: styles.tableFooter6 },
      { content: '', styles: styles.infoEmpty },
    ],
    [
      { content: '', colSpan: 5, styles: styles.infoEmpty },
      { content: 'TOTAL', styles: styles.tableFooter4 },
      { content: `$ ${amount}`, styles: styles.tableFooter7 },
      { content: '', styles: styles.infoEmpty },
    ],
  ]);

  static produceAccount = ({ myName, myBankSwift, myBankAccount }) => ([
    [
      { content: '', styles: styles.infoEmpty },
      { content: 'Make all checks payable to:', colSpan: 7 , styles: styles.info2 },
    ],
    [
      { content: '', styles: styles.infoEmpty },
      { content: myName, colSpan: 7 , styles: styles.tableFooter2 },
    ],
    [
      { content: '', styles: styles.infoEmpty },
      { content: `SWIFT-code: ${myBankSwift}`, colSpan: 7 , styles: styles.info1 },
    ],
    [
      { content: '', styles: styles.infoEmpty },
      { content: `Account: ${myBankAccount}`, colSpan: 7 , styles: styles.info1 },
    ],
    [
      { content: '', colSpan: 8, styles: styles.infoEmpty },
    ],
  ]);

  static produceHoursHeader = () => ([
    new Array(7).fill({ content: '', styles: styles.hoursTableFormatting }),
    [
      { content: 'WORKED HOURS', colSpan: 7, styles: styles.subheader2 },
    ],
    [
      ...workingDays.map(day => ({ content: day, styles: styles.weekDay })),
      ...weekendDays.map(day => ({ content: day, styles: styles.weekEnd })),
    ],
  ]);

  static produceWeek = ({ hours, year, month, index }) => {
    const startDate = Dates.getFirstDateInWeek(year, month, index);
    const startDateDay = startDate !== 1 ? 0 : Dates.getFormattedDayOfDate(year, month, startDate);
    const monthLength = Dates.getDaysCount(year, month);
    const createDates =
      (length) => new Array(length)
        .fill(null)
        .map((el, i) => {
          const date = startDate + i;
          return date > monthLength ? '' : date;
        });
    const dates = startDateDay === 0
      ? createDates(7)
      : new Array(startDateDay)
        .fill('')
        .concat(createDates(7 - startDateDay));

    const createHours =
      (length) => new Array(length)
        .fill(null)
        .map((el, i) => {
          const date = startDate + i;
          return hours[date - 1] ? numeral(hours[date - 1]).format('0,0.0') : '';
        });
    const hoursOnDates = startDateDay === 0
      ? createHours(7)
      : new Array(startDateDay)
        .fill('')
        .concat(createHours(7 - startDateDay));

    return ([
      dates.map(date => ({ content: date, styles: styles.date })),
      hoursOnDates.map(hoursValue => ({ content: hoursValue, styles: styles.hours }))
    ]);
  };

  renderInvoice = () => {
    GenPdf.setLocaleToNumeral();

    const {
      number, date, myName, my, myBankSwift, myBankAccount,
      contrAgent, hours, month, year, hourRate,
    } = this.data;
    const newNumber =
      /^\d+$/.test(number.toString())
        ? `00-${numeral(number).format('000000')}`
        : number;
    const hoursTotal = hours.reduce((acc, el) => acc + Number(el), 0);
    const amount = numeral(hoursTotal).multiply(hourRate).format('0,0.00');
    const nextMonth = (month + 1) % 12;
    const nextMonthYear = month + 1 >= 12 ? year + 1 : year;
    const jobString = `Activity of development software for the month of ${
      months[month]} as per agreement stipulated in date ${
      months[nextMonth]} 1st ${nextMonthYear}`;
    const weeksCount = Dates.getWeeksCount2(year, month);

    const formattedData = [
      ...GenPdf.produceFormatting(),
      ...GenPdf.produceHeader({ myName, newNumber, date }),
      ...GenPdf.produceAddressArea({ my, contrAgent }),
      ...GenPdf.produceTable({ jobString, hoursTotal, hourRate, amount }),
      ...GenPdf.produceFooter({ amount }),
      ...GenPdf.produceAccount({ myName, myBankSwift, myBankAccount }),
    ];

    const calendarData = [
      ...GenPdf.produceHoursHeader(),
      ...new Array(weeksCount)
        .fill(null)
        .map((el, index) => GenPdf.produceWeek({ hours, month, year, index }))
        .reduce((acc, item) => ([...acc, ...item]), []),
    ];

    this.doc.autoTable({
      theme: 'striped',
      startY: 5,
      bodyStyles: { fontSize: 10 },
      body: formattedData,
    });

    this.doc.autoTable({
      theme: 'striped',
      margin: { top: 20, left: 47, },
      tableWidth: 115,
      bodyStyles: { fontSize: 10 },
      body: calendarData,
    });
  };

  save = () => {
    const { filenamePrefix, year, month } = this.data;
    const filename = generateFileName(filenamePrefix, year, month);
    this.doc.save(filename);
  }
}

export const createPdf = (data) => {
  const pdf = new GenPdf();
  pdf.setData(data);
  pdf.renderInvoice();
  pdf.save();
};
