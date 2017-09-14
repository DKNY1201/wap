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

Employee.setName('Peter');
Employee.setAge(27);
Employee.setSalary(140000);
Employee.increaseSalary(100);
Employee.incrementAge();
console.log(Employee.getAgePub());
console.log(Employee.getNamePub());
console.log(Employee.getSalaryPub());