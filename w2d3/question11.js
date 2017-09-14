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