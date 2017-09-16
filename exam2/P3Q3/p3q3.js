// Question 3

// Part 1
(function () {
    var Car = {
        make: 'default',
        model: 'default',
        color: 'default',
        drive: function (speed) {
            console.log('The ' + this.color + ' ' + this.make + ' ' + this.model + ' is driving at ' + speed + ' mph');
        },
        stop: function () {
            console.log('The ' + this.color + ' ' + this.make + ' ' + this.model + ' is stopping');
        }
    }

    var redHondaAccord = Object.create(Car);
    redHondaAccord.color = 'red';
    redHondaAccord.make = 'Honda';
    redHondaAccord.model = 'Accord';

    redHondaAccord.drive(200);
    redHondaAccord.stop();
})();

// Part 2
(function () {
    function Car() {
        make = 'default';
        model = 'default';
        color = 'default';

        function stop() {
            console.log('The ' + this.color + ' ' + this.make + ' ' + this.model + ' is stopping');
        }
    }

    Car.prototype.drive = function(speed) {
        console.log('The ' + this.color + ' ' + this.make + ' ' + this.model + ' is driving at ' + speed + ' mph');
    }

    Car.prototype.stop = function () {
        console.log('The ' + this.color + ' ' + this.make + ' ' + this.model + ' is stopping');
    }

    var redHondaAccord = new Car();
    redHondaAccord.color = 'red';
    redHondaAccord.make = 'Honda';
    redHondaAccord.model = 'Accord';

    redHondaAccord.drive(200);
    redHondaAccord.stop();
})();