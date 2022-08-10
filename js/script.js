"use strict";

//1
function sumTo(n) {
    if (n===1) {
        return n;
    }
    return n + sumTo(n-1);
}
console.log(sumTo(4)); // 10
console.log(sumTo(3)); // 6