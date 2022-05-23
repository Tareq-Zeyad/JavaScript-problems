'use strict';

// Problem 1
/* 
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/
function sumAll(arr) {
    let sum = 0;
    let max = Math.max(arr[0],arr[1]);
    let min = Math.min(arr[0],arr[1]);

    for (let i = min; i <= max; i++) {
        sum += i;
      }
      console.log(sum);
      return sum;
  }
  
  sumAll([10, 5]);

// Problem 2
/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/
function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

