// // Question 1
// x = 1;
// var a = 5;
// var b = 10;
// var c = function (a, b, c) {
//     document.writeln(x); // undefined
//     document.writeln(a); // 8
//     var f = function (a, b, c) {
//         b = a;
//         document.writeln(b); // 8
//         b = c;
//         var x = 5;
//     }
//     f(a, b, c);
//     document.writeln(b); // 9
//     var x = 10;
// }
//
// c(8,9,10);
// document.writeln(b); // 10
// document.writeln(x); // 1
//
//
// Question 2
// var global = 10;
// function defineLocal() {
//     var local = 1;
// }
//
//
// Question 3
// a. No
// b. Yes
// c. No
// d. Yes
// e. Yes

// var outerVar = 10;
// // console.log(xVar);
// function XFunc() {
//     console.log(outerVar);
//     var xVar = 1;
//     function YFunc() {
//         var yVar = 2;
//     }
// }
// XFunc();


// Question 4
// 81
// 25
// var x = 9;
// function myFunction() {
//     return x * x;
// }
// document.write(myFunction()); // 81
// x = 5;
// document.write(myFunction()); // 25


// Question 5
// 100
// var foo = 1;
// function bar() {
//     if (!foo) {
//         var foo = 100;
//     }
//     alert(foo);
// }
// bar();


// Question 6
var count = (function () {
    var counter = 0;

    return {
        add: () => ++counter,
        reset: () => { counter = 0; },
        get: () => counter
    }
})();
//
// count.add();
// count.add();
// count.add();
// console.log(count.get());
// count.reset();
// console.log(count.get());


// Question 7
// Free variable is 'counter'
// Free variable is the variable from outer scope that the inner scope can access
// var add = (function () {
//     var counter = 0;
//     return function () {
//         return counter += 1;
//     }
// })();
//
// console.log(add());
// console.log(add());


// Question 8
// var make_adder = (function (inc) {
//     var counter = 0;
//     return function (inc) {
//         return counter += inc;
//     }
// })();
//
// make_adder(7);
// make_adder(7);
// console.log(make_adder(7));


// Question 9
// Use IIFE technique


// Question 10
var Employee = (function () {
    var name;
    var age;
    var salary;

    function getAge() {
        return age;
    }

    function getSalary() {
        return salary;
    }

    function getName() {
        return name;

    }

    return {
        setAge: newAge => {age = newAge},
        setSalary: newSalary => {salary = newSalary},
        setName: newName => {name = newName},
        increaseSalary: percentage => {salary = getSalary() + (getSalary() * percentage) / 100},
        incrementAge: () => {age = getAge() + 1},
        getAgePub: () => getAge(),
        getSalaryPub: () => getSalary(),
        getNamePub: () => getName()
    }
})();
//
// Employee.setName('Peter');
// Employee.setAge(27);
// Employee.setSalary(140000);
// Employee.increaseSalary(100);
// Employee.incrementAge();
// console.log(Employee.getAgePub());
// console.log(Employee.getNamePub());
// console.log(Employee.getSalaryPub());


// Question 11
var Employee = (function () {
    var name;
    var age;
    var salary;
    var address;

    function getAge() {
        return age;
    }

    function getSalary() {
        return salary;
    }

    function getName() {
        return name;
    }

    return {
        setAge: newAge => {age = newAge},
        setSalary: newSalary => {salary = newSalary},
        setName: newName => {name = newName},
        increaseSalary: percentage => {salary = getSalary() + (getSalary() * percentage) / 100},
        incrementAge: () => {age = getAge() + 1},
        getAgePub: () => getAge(),
        getSalaryPub: () => getSalary(),
        getNamePub: () => getName(),
        setAddress: (newAddress) => {address = newAddress},
        getAddress: () => address,
        address: address
    }
})();

Employee.setName('Peter');
Employee.setAge(27);
Employee.setSalary(140000);
Employee.increaseSalary(100);
Employee.incrementAge();
Employee.setAddress('1005 N.Main Street');
console.log(Employee.getAgePub());
console.log(Employee.getNamePub());
console.log(Employee.getSalaryPub());
console.log(Employee.getAddress());