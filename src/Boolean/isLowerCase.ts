function isLowerCase(value: any){

  if(value === value.toLowerCase()){

    return true;

  } else {

    return false;

  }

}

function isLowerCaseIndex(value: any, index: number){
    
  if(value.charAt(index) === value.charAt(index).toLowerCase()){

    return true;

  } else {

    return false;

  }

}