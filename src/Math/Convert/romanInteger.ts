function arabicToRoman(value: number) {

  if (typeof value !== 'number') return false;

  let digits = String(+value).split(""),
    key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
      "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
      "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    result = "",
    i = 3;

  while (i--)

    result = (key[+digits.pop() + (i * 10)] || "") + result;

  return Array(+digits.join("") + 1).join("M") + result;

}

function romanToArabic(value: string) {

  if (value == null) return -1;

  let value = characterToNumber(string.charAt(0));
  let previous,
    current;

  for (let i = 1; i < string.length; i++) {

    current = characterToNumber(string.charAt(i));
    previous = characterToNumber(string.charAt(i - 1));

    if (current <= previous) {

      value += current;

    } else {

      value = value - previous * 2 + current;

    }

  }

  return value;

}

function characterToNumber(char: string) {

  switch (char) {
    case 'I':
      return 1;
    case 'V':
      return 5;
    case 'X':
      return 10;
    case 'L':
      return 50;
    case 'C':
      return 100;
    case 'D':
      return 500;
    case 'M':
      return 1000;
    default:
      return -1;
  }

}