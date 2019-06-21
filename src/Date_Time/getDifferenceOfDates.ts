let getDifferenceOfDates = function (firstDate: any, secondDate: any) {

  let dt1 = new Date(firstDate);
  let dt2 = new Date(secondDate);

  return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));

}