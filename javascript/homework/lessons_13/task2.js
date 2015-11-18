function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("???????? ?????? ???? ?????????????");
        }
        if (amount > capacity) {
            throw new Error("Cannot  add more, then " + capacity);
        }

        waterAmount = amount;
    };
    this.addWater = function(amount){
        this.setWaterAmount(waterAmount + amount);
    };

    function onReady() {
        console.log( '???? ?????!' );
    }

    this.run = function() {
        setTimeout(onReady, getTimeToBoil());
    };

}
var coffeMachine = new CoffeeMachine(1000,300);
console.log(coffeMachine.addWater(200));
console.log(coffeMachine.addWater(100));
coffeMachine.run();