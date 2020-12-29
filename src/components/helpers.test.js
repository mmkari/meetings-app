import {
  getTimeString,
  getCurrentDate,
  getTimeFromIso,
  getTimeInHours,
  getDateString,
} from "./helpers";

const DATE1 = "2020-12-05T16:08:00";
const MS1 = 1607177280000;
const TIME_STRING1 = "16:08";
const TIME_STRING1B = "16.08";
const HOURS_DECIMAL1 = 16.13;
const DATE_STRING1 = "Saturday, 12/5/2020";
const DATE_PARTS1 = {
  day: 5,
  hours: 16,
  minutes: 8,
  month: 12,
  year: 2020,
};

const DATE2 = "2018-03-03T09:30:00";
const TIME_STRING2 = "9:30";
const HOURS_DECIMAL2 = 9.5;

const roundToTwoDecimals = (number) => Math.round(number * 100) / 100;

it("gets a ms-time from iso date", () => {
  expect(getTimeFromIso(DATE1)).toEqual(MS1);
});

it("gets a timestring from iso date", () => {
  expect(getTimeString(DATE1)).toEqual(TIME_STRING1);
  expect(getTimeString(DATE1, ".")).toEqual(TIME_STRING1B);
  expect(getTimeString(DATE2)).toEqual(TIME_STRING2);
});

it("gets time in hours from iso date", () => {
  expect(roundToTwoDecimals(getTimeInHours(DATE1))).toEqual(HOURS_DECIMAL1);
  expect(getTimeInHours(DATE2)).toEqual(HOURS_DECIMAL2);
});

it("gets date string from iso date", () => {
  expect(getDateString(DATE1)).toEqual(DATE_STRING1);
});

it("gets date object from iso date", () => {
  expect(getCurrentDate(DATE1)).toEqual(DATE_PARTS1);
});
