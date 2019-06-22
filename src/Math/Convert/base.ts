function base(value: number, initial: number, change: number) {

  if ((initial && change) < 2 || (initial && change) > 36) return 'Base between 2 and 36';

  return parseInt(value + '', initial).toString(change);

}