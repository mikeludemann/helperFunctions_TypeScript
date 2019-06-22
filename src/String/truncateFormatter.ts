function truncate(value: string, length: number) {

  if ((value.constructor === String) && (length > 0)) {

    return value.slice(0, length);

  }

};

function truncateFormat(value: string, length: number, ending: any) {

  if (length == null) {

    length;

  }

  if (ending == null) {

    ending = '...';

  }

  if (value.length > length) {

    return value.substring(0, length - ending.length) + ending;

  } else {

    return value;

  }
    
};