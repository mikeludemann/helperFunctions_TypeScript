function getDaysOfYear(year: any): number {

  return isLeapYear(year) ? 366 : 365;

}

function isLeapYear(year: any): any {

  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  
}