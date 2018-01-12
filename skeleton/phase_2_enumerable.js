Array.prototype.myEach = function (callback) {

  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
  return undefined;
};

Array.prototype.myMap = function (callback) {
  let result = [];
  this.myEach(function(element){
    result.push(callback(element));
  });
  return result;
};


Array.prototype.myReduce = function (callback, initial=undefined) {
  if (initial === undefined) {

    if (this.length === 1) { return this[0]; }

    if (this.length === 0) {
      throw TypeError('Reduce of empty array with no initial value');
    }

    let starter = this[0];
    let rest = this.slice(1);
    return rest.myReduce(callback, starter);

  } else {

    let lastResult = initial;
    this.forEach(function(element) {
      lastResult = callback(element, lastResult);
    } );

    return lastResult;
  }
};

// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(["JS'", array1.reduce(reducer)]);
// //console.log([].reduce(reducer));
// console.log(["Ours:", array1.myReduce(reducer)]);
// // expected output: 10
// console.log(["JS's:", array1.reduce(reducer, 5)]);
// console.log(["Ours:", array1.myReduce(reducer, 5)]);
// test_array = [1,42,89, -23232332]
// let logger = function (thing) { console.log(thing); };
// test_array.myEach(logger)
