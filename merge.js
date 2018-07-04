function merge(array0, array1) {
  var result = [];
  var index0 = 0;
  var index1 = 0;
  while (index0 < array0.length && index1 < array1.length) {
    if (array0[index0] < array1[index1]) {
      result.push(array0[index0]);
      index0++;
    }
    else {
      result.push(array1[index1]);
      index1++;
    }
  }

  while (index0 < array0.length || index1 < array1.length) {
    if (index0 < array0.length) {
      result.push(array0[index0]);
      index0++;
    }
    else {
      result.push(array1[index1]);
      index1++;
    }
  }
  return result;
}


console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);