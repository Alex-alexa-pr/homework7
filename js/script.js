"use strict";

//1
// function sumTo(n) {
//     if (n===1) {
//         return n;
//     }
//     return n + sumTo(n-1);
// }
// console.log(sumTo(4)); // 10
// console.log(sumTo(3)); 

//2
function findShort(sentance) {
    return sentance.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
    }
    console.log(findShort("Lorem ipsum dolor sit amet"));
    console.log(findShort("Hello world"));
    console.log(findShort("Hi"));
    console.log(findShort("She is David's sister"));