'use strict';

// Question 1
// given an array, return an array for the elements that doesn't have greater elements in the right side of them.. EX: [2,8,5,4] => [8,5,4]
// to make a new array after deducting items that has greater values to the right.
let arr = [2,8,5,4,7,3,6];
function greaterRight(arr){
    let newArr=[];
    let max = arr[arr.length-1];
    newArr.push(max);
    for (let i = arr.length-2; i >=0; i--) {
        if(arr[i]>max){
            max=arr[i];
            newArr.push(max);
        }
        
    }
    return newArr
};
console.log( "First Question answer:", greaterRight(arr));

// Question 2 
// check if two words have same letter's order (ignore duplication)

let s1 = "geeks",
    s2 = "geks",
    s3 = "geeks",
    s4 = "geeks",
    s5 = "wow",
    s6 = "wwo";

function sameLetters(s1,s2){
    let newS1 = s1[0];
    let newS2 = s2[0];

    for (let i = 0; i < s1.length; i++) {
        if (s1[i]!=s1[i+1]) {
            newS1+= s1[i]
        }
        
    }
    for (let i = 0; i < s2.length; i++) {
        if (s2[i]!=s2[i+1]) {
            newS2+= s2[i]
        }
        
    }
    if (newS1===newS2) {
        return true
    }
    return false;
    
}
console.log("Second Question answer:",sameLetters(s1,s2));


// Question 3
// revers a String
let str = "reversedString";
function reverse(str) {
    let newStr="";
    for (let i = str.length-1; i>=0; i--) {
        newStr += str[i]
        
    }
    return newStr;
}
console.log("Third Question answer:",reverse(str));

// Question 4
// swap two variable without third variable
let x = 5;
let y = 7;
//output
//x = 7;
//y = 5;

function swap(x,y) {
    x = x + y; 
    y = x - y; 
    x = x - y;

    return `x=${x}, y=${y}`
}
console.log("Fourth Question answer:",swap(x, y));

// Question 5
// method to find the duplicated number in arr from 1-9
//input
let num = [1, 2, 4, 3, 5, 6, 7, 8, 7, 9]; // must be arr from 1 - 9 , sum from 1 to 9 = 45
//output
//7

function repeatedNum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];  
    }
    let result = sum - 45;
    return result; 
}
console.log("repeatedNum is : ", repeatedNum(num));

// Question 6
// how much time you can divide the number by 2 and not able to divide
//output
//6
let num1=14;
function dividable(num){
    let count = 0;
    while(num>0){
        if(num%2 === 0){
            num=num/2;
        }else{
            num=num - 1;
        }
        count ++;
    }
    return count;

}
console.log("6ith Question answer:",dividable(num1));

// Question 7
let array = [1, 5, 6, 7, 8, 9, 10, 12];
//output
//[1,8,5,9,6,10,7,12]
function newArrange(arr){
    let newArr=[];
    let x = Math.floor(arr.length/2);
    for (let i = 0; i < x; i++) {
        newArr.push(arr[i], arr[x+i]);

        
    }
    return newArr;
}
console.log( "7th Question answer:", newArrange(array));

// Question 8
let array1 = [1, 2, 3, 3, 5, 7, 8, 2, 2, 2, 2, 4, 8, 8, 5];
//output
//[1,2,6,5,7,8,8,4,16,5]
function sumDuplicate(arr) {
  let counter=0;
  let newArr=[];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]===arr[i+1]){
      counter+=arr[i];
    } else if (counter != 0){
      counter+=arr[i];
      newArr.push(counter);
      counter=0;
    }else{
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log( "8th Question answer:", sumDuplicate(array1));

// Question 9
// Find all the missing numbers between the min and the max number in this array (No built in methods allowed)
// array = [0, 5, 4, 9, 3]; output ==> [1, 2, 6, 7, 8]
let missArr=[0,5,4,9,3];
function missingNumbers(arr) {
  let max=arr[0],
      min=0,
      newArr=[];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]<min){
      min=arr[i];
    }
    if (arr[i]>max){
      max=arr[i];
    }
  }
  for (let i = min+1; i < max; i++) {
    if(!arr.includes(i)){
      newArr.push(i);
    }
  }
  return newArr
}
console.log( "9nth Question answer:", missingNumbers(missArr));

