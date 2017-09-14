'use strict';
// window.open("http://truongphusteel.vn","Truong Phu Steel", "width=900, height=600, scrollbars=1");
// function max(a, b) {
//     console.log(typeof (a) + "==" + typeof (b));
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(max(1,6));
//
// function maxOfThree(a, b, c) {
//     let max = a;
//
//     if (b > max) {
//         max = b;
//     }
//     if (c > max) {
//         max = c;
//     }
//
//     return max;
// }
// console.log(maxOfThree(4,7,6));
//
// function isVowel(c) {
//     var vowel = ['a', 'e', 'o', 'i', 'u'];
//     return vowel.indexOf(c) != -1 ? true : false;
// }
// console.log(isVowel('a'));
// console.log(isVowel('c'));
//
// function sum(arr) {
//     if (!(arr instanceof Array)) {
//         return 'Please input an Array';
//     }
//
//     let sum = 0;
//     if (arr.length > 0) {
//         for (let i of arr) {
//             sum += i;
//         }
//     }
//
//     return sum;
// }
// console.log(sum([1,2,3,4]));
//
// function multiply(arr) {
//     if (!(arr instanceof Array)) {
//         return 'Please input an Array';
//     }
//
//     let product = 1;
//     if (arr.length > 0) {
//         for (let i of arr) {
//             product *= i;
//         }
//     }
//
//     return product;
// }
// console.log(multiply([1,2,3,4]));
//
// function reverse(str) {
//     if (typeof str !== 'string') {
//         return 'Please input a string';
//     }
//
//     let i;
//     let result = '';
//     for (i = str.length - 1; i >= 0; i--) {
//         result += str.charAt(i);
//     }
//
//     return result;
// }
// console.log(reverse('Maharishi'));
//
// function findLongestWord(words) {
//     if (!(words instanceof Array)) {
//         return 'Please input an Array';
//     }
//
//     let longestLen = 0;
//     let idx = 0;
//     let i;
//
//     for (i = 0; i < words.length; i++) {
//         const word = words[i];
//         if (word.length > longestLen) {
//             longestLen = word.length;
//             idx = i;
//         }
//     }
//
//     return words[idx];
// }
// console.log(findLongestWord(['peter', 'marry', 'bob', 'jack','marilyn']));
//
// function filterLongWords(words, n) {
//     if (!(words instanceof Array)) {
//         return 'Please input an Array';
//     }
//
//     let newWords = [];
//     let i;
//
//     for (i = 0; i < words.length; i++) {
//         const word = words[i];
//         if (word.length > n) {
//             newWords.push(word);
//         }
//     }
//
//     return newWords;
// }
// console.log(filterLongWords(['peter', 'marry', 'bob', 'jack','marilyn'], 4));
//
// // let interval = setInterval(() => {
// //     console.log(1);
// // }, 1000);
// //
// // setTimeout(() => {
// //     clearInterval(interval);
// // }, 4000);
//
// function sum1(a,b) {
//     console.log(a + b);
// }
//
// setInterval(sum1, 1000, 1,10);

// console.log(a);
// b();
//
// var a = 5;
// function b() {
//     console.log('function is called');
// }


// console.log(x);
// function a() {
//     var x;
//     // console.log(x);
// }
//
// function b() {
//     var x = 20;
//     a();
//     console.log(x);
// }
//
// var x = 30;
// b();
//
// console.log(x);

// function foo() {
//     x = 2;
//     console.log(x);
//     var y = 3;
//     console.log(y);
//     y = 4;
//     console.log(y);
// }
// foo();
// console.log(x);
// console.log(y);

// var x = 10;
//
// function main() {
//     console.log("x1 is " + x); // undefined
//     x = 20;
//     console.log("x2 is " + x); // 20
//     if (x > 0) {
//         x = 30;
//         console.log("x3 is " + x); // 30
//     }
//     console.log("x4 is " + x); // 30
//     var x = 40;
//     var f = function (x) {
//         console.log("x5 is " + x); // 50
//     }
//     f(50);
//     console.log("x6 is " + x); // 40
// }
//
// main();
// console.log("x7 is " + x); // 10


// function b() {
//
//     function a() {
//         console.log(x); // 20
//     }
//     var x = 10;
//     a();
//
// }
//
// var x = 20;
// b();

// function a() {
//     console.log(x);
// }
//
// function b() {
//     var x = 20;
//     a();
//     // console.log(x); // 20
// }
//
// var x = 30;
// b();

// console.log(x); // 30

// function b() {
//     function a() {
//         console.log(x);
//     }
//     var x = 10;
//     a();
// }
// var x = 20;
// b();

// function b() {
//     function a() {
//         console.log(x);
//     }
//     a();
// }
// var x = 20;
// b();

// function f() {
//     var a = 1, b = 20, c;
//     console.log(a + " " + b + " " + c); // 1 20 undefined
//
//     function g() {
//         var b = 300, c = 4000;
//         console.log(a + " " + b + " " + c); // 1 300 4000
//         a = a + b + c;
//         console.log(a + " " + b + " " + c); // 4301 300 4000
//     }
//
//     console.log(a + " " + b + " " + c); // 1 20 undefined
//     g();
//     console.log(a + " " + b + " " + c); // 4301 20 undefined
// }
// f();

// function a() {
//     for (var x = 0; x < 10; x++) {
//         console.log(x);
//     }
//
//     console.log(x);
// }
// a();
//
// function b() {
//     for (let x = 0; x < 10; x++) {
//         console.log(x);
//     }
//
//     console.log(x);
// }
// b();


// let a = 10;
// var b = 10;
//
// console.log(this.a);
// console.log(this.b);

//
// const MY_NUM = 7;
// // MY_NUM = 20;
// console.log(MY_NUM);
// // const MY_NUM = 10;
// console.log(MY_NUM);
// // var MY_NUM = 15;
// console.log(MY_NUM);
//
// // const FOO;
//
// const MY_OBJ = {'studentID': '985848'};
// // const MY_OBJ = {'firstName': 'Quy'};
// Object.freeze(MY_OBJ);
// MY_OBJ.studentID = '999999';
// console.log(MY_OBJ);

// eat();
// function eat() {
//     console.log('eat');
// }
//
// let act = function() {
//     console.log('Jummy');
// }
//
// act.meal = 'pizza';
//
//
// console.log(act.meal);

// var a = {'name': 'quy tran'};
// var b = a;
//
// b.name = 'kim long';
//
// a = {'name': 'quy tran'};
//
// console.log(a.name);
// console.log(b.name);


// function invoker(x) {
//     x();
// }
//
// function hi() {
//     console.log('hi');
// }
//
// invoker(hi);
//
// invoker(function () {
//     console.log('aaa');
// })

// Argument
// function agrs() {
//     for (var i of arguments) {
//         console.log(i);
//     }
// }
//
// agrs(1,'q', [2,3]);

const multiple = (a1, a2) => a1 * a2;
let result = multiple(5,4);
console.log(result);
