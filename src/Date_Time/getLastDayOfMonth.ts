var getLastDayOfMonth = function (year: any, month: any): any {

  return new Date(year, month + 1, 0).getDate();

}