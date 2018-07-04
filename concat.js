function concat(array0, array1) {
  var result = array0;       // using this variable to store the final result, initialize value as array0
  var i;                     // counter for loop, and current position in array1
  var j = array1.length // endpoint for loop, determined by array1's length
  for (i = 0; i < j; i++) {
    result.push(array1[i]);
  }
  return result;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);