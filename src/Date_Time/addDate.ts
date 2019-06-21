function addYear(value: any, index: any): Date {

  return new Date(value.setFullYear(value.getFullYear() + index));

}

function addMonth(value: any, index: any): Date {

  return new Date(value.setMonth(value.getMonth() + index));

}

function addWeek(value: any, index: any): Date {

  return new Date(value.setDate(value.getDate() + (index * 7)));

}

function addDay(value: any, index: any): Date {

  return new Date(value.setDate(value.getDate() + index));

}

function addHours(value: any, index: any): Date {

  return new Date(value.setHours(value.getHours() + index));

}

function addMinutes(value: any, index: any): Date {

  return new Date(value.setMinutes(value.getMinutes() + index));

}

function addSeconds(value: any, index: any): Date {

  return new Date(value.setSeconds(value.getSeconds() + index));

}

function addMilliseconds(value: any, index: any): Date {

  return new Date(value.setMilliseconds(value.getMilliseconds() + index));

}