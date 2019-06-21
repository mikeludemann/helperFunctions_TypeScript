let addWeek = function (value: any, weeks: any): Date {
    
  return new Date(value.getTime() + weeks * 604800000);

}

let addDays = function (value: any, days: any): Date {
  
  return new Date(value.getTime() + days * 86400000);

}

let addHours = function (value: any, hours: any): Date {
  
  return new Date(value.getTime() + hours * 3600000);

}

let addMinutes = function (value: any, minutes: any): Date {

  return new Date(value.getTime() + minutes * 60000);

}

let addSeconds = function (value: any, seconds: any): Date {
  
  return new Date(value.getTime() + seconds * 1000);

}