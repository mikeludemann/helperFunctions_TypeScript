function isUpperCase(value: any){

  if(value === value.toUpperCase()){

    return true;

  } else {

    return false;

  }

}

function isUpperCaseIndex(value: any, index: any){
  
  if(value.charAt(index) === value.charAt(index).toUpperCase()){

    return true;

  } else {

    return false;

  }

}