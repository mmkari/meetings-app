const getTimeString = (iso, delimiter = ":") => {
  const date = getCurrentDate(iso);
  return `${date.hours}${delimiter}${("0" + date.minutes).slice(-2)}`;
};
const getDateString = (iso, locale = "en") => {
  const date = new Date(iso);
  return date.toLocaleDateString(locale, {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
};
const getCurrentDate = (iso) => {
  const date = iso ? new Date(iso) : new Date();
  return {
    minutes: date.getMinutes(),
    hours: date.getHours(),
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };
};
const getTimeFromIso = (iso) => {
  const date = iso ? new Date(iso) : new Date();
  return date.getTime(); // ms since unix epoch
};
const getTimeInHours = (iso) => {
  const date = getCurrentDate(iso);
  return date.hours + date.minutes / 60.0;
};

export {
  getTimeString,
  getCurrentDate,
  getTimeFromIso,
  getTimeInHours,
  getDateString,
};
