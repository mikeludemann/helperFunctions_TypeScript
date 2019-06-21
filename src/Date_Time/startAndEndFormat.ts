function startOfWeek(value: Date) {

  let start = value.getDate() - value.getDay() + (value.getDay() === 0 ? -6 : 1);

  return new Date(value.setDate(start));

}

function endOfWeek(value: Date) {

  let end = value.getDate() - (value.getDay() - 1) + 6;

  return new Date(value.setDate(end));

}

function startOfMonth(value: Date) {

  return new Date(value.getFullYear(), value.getMonth(), 1);

}

function endOfMonth(value: Date) {

  return new Date(value.getFullYear(), value.getMonth() + 1, 0);

}