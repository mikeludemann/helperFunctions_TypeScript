let removeWeek = function (value: Date, weeks: any) {
    
  return new Date(value.getTime() - weeks * 604800000);

}

let removeDays = function (value: Date, days: any) {
  
  return new Date(value.getTime() - days * 86400000);

}

let removeHours = function (value: Date, hours: any) {
  
  return new Date(value.getTime() - hours * 3600000);

}

let removeMinutes = function (value: Date, minutes: any) {

  return new Date(value.getTime() - minutes * 60000);

}

let removeSeconds = function (value: Date, seconds: any) {
  
  return new Date(value.getTime() - seconds * 1000);

}