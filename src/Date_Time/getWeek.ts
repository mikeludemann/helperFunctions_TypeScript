Date.prototype.getWeek = function () {

  let date = new Date(this.getTime());

  date.setHours(0, 0, 0, 0);
  
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  
  let firstWeek = new Date(date.getFullYear(), 0, 1);

  return 1 + Math.round(((date.getTime() - firstWeek.getTime()) / 86400000 - 3 + (firstWeek.getDay() + 6) % 7) / 7);
  
}