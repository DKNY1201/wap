var count = (function () {
    var counter = 0;

    if (true) {
        let a = 100;
        var b = 1000;
    }

    return {
        add: () => ++counter,
        reset: () => { counter = 0; },
        get: () => counter
    }
})();

count.add();
count.add();
count.add();
console.log(count.get());
count.reset();
console.log(count.get());