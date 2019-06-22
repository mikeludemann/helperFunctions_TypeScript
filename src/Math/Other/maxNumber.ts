function maxNumber(arr: Array<number>) {

    if (toString.call(arr) !== "[object Array]") return false;

    return Math.max.apply(null, arr);

}