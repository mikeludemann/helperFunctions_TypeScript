let getDaysInMonth = function (month: any, year: any): number {
    
  return new Date(year, month, 0).getDate();
  
};