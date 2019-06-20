function isPalindrome(value: any) {

  let reverse = value.split("").reverse().join("");

  return value == reverse;

}