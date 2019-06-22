function percentage(value: number, percentage: number) {

  if (value == null || value == "" || value == 0) {

    return 0;

  }

  if (percentage == null || percentage == "" || percentage == 0) {

    return false;

  }

  return parseFloat((value / 100) * percentage);

}