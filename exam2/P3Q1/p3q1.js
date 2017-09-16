// Question 1
(function () {
    function calculateAverage() {
        let average = 0;
        if (arguments.length > 0) {
            let total = 0;
            for (let arg of arguments) {
                total += +arg;
            }
            average = total / arguments.length;
        }
        return average;
    }

    console.log(calculateAverage(1,2,3));
    console.log(calculateAverage(1,2,3,4));
    console.log(calculateAverage(1,2,3,4,5,16.6));

})();