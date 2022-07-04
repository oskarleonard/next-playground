const enforceDoubleDigitDate = (date) =>
  date?.getDate() < 10 ? `0${date?.getDate()}` : date?.getDate();

const monthsShort = [
  'jan',
  'feb',
  'mar',
  'apr',
  'maj',
  'jun',
  'jul',
  'aug',
  'sep',
  'okt',
  'nov',
  'dec',
];

export function getDateTime(date) {
  return `${getDate(date)} - ${getTime(date)}`;
}

export function getDate(date) {
  const startDay = enforceDoubleDigitDate(date);
  const startMonth = monthsShort[date.getMonth()];

  return `${date.getFullYear()} ${startMonth} ${startDay}`;
}

export function getTime(date) {
  const formattedDate = new Date(date);
  const minutes = formattedDate.getMinutes();
  const hours = formattedDate.getHours();
  const minEnsureDoubleDigit = minutes < 10 ? `0${minutes}` : minutes;
  const hoursEnsureDoubleDigit = hours < 10 ? `0${hours}` : hours;

  return `${hoursEnsureDoubleDigit}:${minEnsureDoubleDigit}`;
}
