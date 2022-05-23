"use strict";


let rows = 7;
let symbol = '#';
for (let i = 0; i < rows; i++) {
    // console.log(symbol);
    symbol += '#';
    
};

for (let i = 0; i <= 100; i++) {
    if( i % 3 === 0){
        // console.log('Fizz');
    } else if (i % 5 === 0){
        // console.log('Buzz');
    } else if (i % 3 === 0 && i % 5 === 0){
        // console.log('FizzBuzz');
    } else (
        console.log(i)
    )
    
};

var board = '';
var oddBoard = '# # # #';
var evenBoard = ' # # # #';
for (let i = 1; i <= 8; i++) {
    if(i%2 == 0){
        board += evenBoard + '\n'
    } else (
        board += oddBoard + '\n'
    )
}
// console.log(board);