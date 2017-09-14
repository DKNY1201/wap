var make_adder = (function (inc) {
    var counter = 0;
    return function (inc) {
        return counter += inc;
    }
})();

make_adder(7);
make_adder(7);
console.log(make_adder(7));