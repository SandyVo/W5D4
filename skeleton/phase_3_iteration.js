Array.prototype.bubbleSort = function () {
  let arr = this.slice();
  var swapped = true;

  while (swapped) {
    swapped = false;
    for ( let i = 0; i < arr.length - 1; i++) {
      if ( arr[i] > arr[i + 1] ) {
        swapped = true;
        let tmp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = tmp;
      }
    }
  }
  return arr;
};

String.prototype.substrings = function () {

  let result = [];

  for (let i = 0; i < this.length+1; i++) {
    for (let j = i+1; j < this.length+1; j++) {
      result.push(this.substring(i, j));
      // console.log([i,j]);
    }
  }
  return new Set(result);
};

// console.log('purple'.substrings());
