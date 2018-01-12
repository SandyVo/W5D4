Array.prototype.uniq = function (){
  let results = [];
  for ( let i = 0; i < this.length; i++) {

    let element = this[i];
    if ( !results.includes(element)) {
      results.push(element);
    }
  }
  return results;
};

Array.prototype.twoSum = function () {
  let result = [];
  this.forEach(function(element, index, arr) {
    for ( let i = index + 1; i < arr.length; i++) {
      if (element + arr[i] === 0) {
        result.push([index, i]);
      }
    }
});
  return result;
};

Array.prototype.fastTwoSum = function () {

  let complements = {};
  let result = [];

  this.forEach(function(element, index) {
    if (Object.keys(complements).includes(`${element}`)) {
      // console.log("HHHEERRREEE")
      result.push([complements[element], index]);
    } else {
      complements[-element] = index;
    }
  });
  console.log(complements);
  return result;
};

// console.log('1111111')
// console.log([1,2,-4,3,4,0,-2].twoSum());
// console.log('22222')
// console.log([1,2,-4,3,4,0,-2].fastTwoSum());

let twoDMatrix = [ [1,2], [4,5], [7,8] ];

Array.prototype.transpose = function () {
  let result = [];
  this[0].forEach(function(element) {
    result.push([]);
  });
  this.forEach(function(row) {
    row.forEach(function(element, index) {
      result[index].push(element);
    });
  });
  return result;
};

// console.log(twoDMatrix.transpose());
