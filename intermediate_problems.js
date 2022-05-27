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
  };
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));


// Problem 3
/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/
function destroyer(arr) {
    let itemsToRemove = Object.values(arguments).slice(1);
    for(let i=0; i<arr.length; i++){
      for (let j=0; j<itemsToRemove.length; j++){
        if(arr[i] === itemsToRemove[j]){
          delete arr[i];
        }
      }
    }
      return arr.filter(item => item !== null);
  
  };
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

function binaryRep(num){
  return (num >>> 0).toString(2);
};
console.log(binaryRep(7));

// Problem 4
/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing
*/
function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9]/g, '');
  if(str.split('').reverse().join('') === str){
    return true;
  }else{
    return false;
  }
};

console.log(palindrome("eye"));

// Problem 5
/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
  let romanVals = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  let romanStr = '';
  
  for(let i = 0; i < romanVals.length; i++) {
  	if(num >= romanVals[i][1]) {
    		romanStr += romanVals[i][0];
      		num -= romanVals[i][1];
      		if(num >= romanVals[i][1]) {
      			romanStr += romanVals[i][0];
      			num -= romanVals[i][1];
        		if(num >= romanVals[i][1]) {
        			romanStr += romanVals[i][0];
      				num -= romanVals[i][1];
        }
      }
    }
  }
  console.log(romanStr);
  return romanStr;
}

convertToRoman(29);



