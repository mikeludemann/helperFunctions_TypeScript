function isDate(value: Date = new Date()) {

  let regexp = /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/;

  if (regexp.test(String(value))){

    return true;

  }

  else {

    return false;

  }

}

function isDateEuropean(value: Date = new Date()) {

  let regexp = /^(3[01]|[12][0-9]|0?[1-9])\/(1[0-2]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/;

  if (regexp.test(String(value))) {

    return true;

  }

  else {

    return false;

  }

}

let isDateFormat = function (input: Date = new Date()) {

  if (Object.prototype.toString.call(input) === "[object Date]") {

    return true;

  } else {

    return false;

  }

};

function isValidDate(dayElement: any, monthElement: any, yearElement: any) {

  let  day = Number(document.querySelector(dayElement).value),
    month = Number(document.querySelector(monthElement).value),
    year = Number(document.querySelector(yearElement).value);

  let  date = new Date();

  date.setFullYear(year, month - 1, day);

  if ((date.getFullYear() == year) && (date.getMonth() == month + 1) && (date.getDate() == day)){

    return true;
  
  }

  return false;
  
}