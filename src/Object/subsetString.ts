String.prototype.subsetString = function () {

  let subsets = [];

  for (let m = 0; m < this.length; m++) {

    for (let n = m + 1; n < this.length + 1; n++) {

      subsets.push(this.slice(m, n));

    }

  }

  return subsets;

};