function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    var timerId;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        // ... ???????? ????????? ??? ?????????
        waterAmount = amount;
    };

    this.getWaterAmount = function(amount) {
        return waterAmount;
    };
    this.isRunning = function(){
        return !!timerId;
    };

    function onReady() {
        console.log( 'Coffee is ready!' );
    }
    this.setOnReady = function(newOnReady){
        onReady = newOnReady;
    };

    this.run = function() {
       timerId = setTimeout(function() {
           timerId = null;onReady();},
    getTimeToBoil());
       };
    }
var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

console.log( '??: ' + coffeeMachine.isRunning() ); // ??: false

coffeeMachine.run();
console.log( '? ????????: ' + coffeeMachine.isRunning() ); // ? ????????: true

coffeeMachine.setOnReady(function() {
    console.log( "?????: " + coffeeMachine.isRunning() ); // ?????: false
});
