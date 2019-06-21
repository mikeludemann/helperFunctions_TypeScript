function getDifferenceYears(firstDate: any, secondDate: any) {

  let diff = (secondDate.getTime() - firstDate.getTime()) / 1000;

  diff /= (60 * 60 * 24);

  return Math.abs(Math.round(diff / 365.25));

}

function getDifferenceMonths(firstDate: any, secondDate: any) {

  let diff = (secondDate.getTime() - firstDate.getTime()) / 1000;

  diff /= (60 * 60 * 24 * 7 * 4);

  return Math.abs(Math.round(diff));

}

function getDifferenceWeeks(firstDate: any, secondDate: any) {

  let diff = (secondDate.getTime() - firstDate.getTime()) / 1000;

  diff /= 60 * 60 * 24 * 7;

  return Math.abs(Math.round(diff));

}

function getDifferenceDays(firstDate: any, secondDate: any) {

  let diff = (secondDate.getTime() - firstDate.getTime()) / 1000;

  diff /= 60 * 60 * 24;

  return Math.abs(Math.round(diff));

}

function getDifferenceHours(firstDate: any, secondDate: any) {

  let diff = (secondDate.getTime() - firstDate.getTime()) / 1000;

  diff /= 60 * 60;

  return Math.abs(Math.round(diff));

}

function getDifferenceMinutes(firstDate: any, secondDate: any) {

  let diff = (secondDate.getTime() - firstDate.getTime()) / 1000;

  diff /= 60;

  return Math.abs(Math.round(diff));

}


function getDifferenceSeconds(firstDate: any, secondDate: any) {

  let diff = (secondDate.getTime() - firstDate.getTime()) / 1000;

  return Math.abs(Math.round(diff));

}

function getDifferenceMilliseconds(firstDate: any, secondDate: any) {

  let diff = (secondDate.getTime() - firstDate.getTime());

  return Math.abs(Math.round(diff));

}