function countWords(value: string) {
    
  if (typeof value === "string") {

    return value.trim().split(/\s+/).length;

  } else {

    return "Not a String";

  }

}