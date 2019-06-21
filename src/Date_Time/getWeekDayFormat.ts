function getWeekDayShort(value: Date) {

  let shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return shortDays[value.getDay()];

}

function getWeekDayLong(value: Date) {

  let longDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return longDays[value.getDay()];

}

function getWeekDayNumber(value: Date) {

  return (value.getDay() === 0 ? 7 : value.getDay());

}

function getEnglishDayFormat(value: Date) {

  return value.getDate() + (value.getDate() % 10 == 1 && value.getDate() != 11 ? 'st' : (value.getDate() % 10 == 2 && value.getDate() != 12 ? 'nd' : (value.getDate() % 10 == 3 && value.getDate() != 13 ? 'rd' : 'th')));

}