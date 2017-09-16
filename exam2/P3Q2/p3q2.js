// Question 2
(function () {
    function multiplesCount(nums, m) {
        return nums.filter(num => num % m == 0).length;
    }
    console.log(multiplesCount([1,2,3,4,5,6], 3));
    console.log(multiplesCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5));
    console.log(multiplesCount([1,2,3,4,5,6], 10));
    console.log(multiplesCount([1,2,3,4,5,6], 2));
})();