Array.prototype.myRange = function(start, end) {
  if ( start === end + 1) {
    return [];
  } else if (start > end) {
    throw "WUT";
  } else {
    return [this[start],].concat(this.myRange(start+1, end));
  }
};

console.log([0,1,2,3].myRange(1,3));

let range = function(start, end) {

  if ( start === end + 1 ) {
    return [];
  }
  if (start > end) { throw "WUT"; }
  return [start,].concat(range(start+1, end));
};

console.log([0,1,2,3].myRange(1,3));
console.log(range(3,6));

sumRec = function(arr) {

  if (arr.length === 0) { return 0; }

  return arr[0] + sumRec(arr.slice(1));

};

console.log(sumRec([0,1,2,3]));

exponentOne = function(base, exp) {

  if (exp === 0) { return 1; }

  if (exp < 0) { return 1 / exponentOne(base, 0-exp); }

  return base * exponentOne(base, exp-1);
};


multiply = function(x, y) {

  if (x === 0 || y === 0) { return 0; }

  if (x === 1) { return y; }

  return x + multiply(x-1, y);
};


addition = function(a, b) {

  if (a === 0) { return b; }

  return 1 + addition(a-1, b);

}

console.log(exponentOne(2,3))
console.log(exponentOne(2,-3))
