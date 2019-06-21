function getPassedDaysOfYear(value: Date) {

  let current: any = new Date(value.getTime());
  let previous: any = new Date(value.getFullYear(), 0, 1);

  return Math.ceil((current - previous + 1) / 86400000);

}