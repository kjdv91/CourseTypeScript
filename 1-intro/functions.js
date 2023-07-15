"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addNum(num) {
    return num + 25;
}
function proofUpper(name) {
    return name.toUpperCase();
}
//
var heros = ["thor", "spiderman", "ironman"];
console.log(heros.map(function (her) {
    return "heros is ".concat(her);
}));
//
console.log(addNum(3));
console.log(proofUpper("kevin"));
console.log(heros);
