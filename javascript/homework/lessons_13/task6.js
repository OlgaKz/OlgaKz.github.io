
function Machine (power){
    this.enable = function(){
        this._enable = true;
    };
    this.disable = function(){
        this._enable = false;
    }
}
function CoffeeMachine(power, capacity) {
    Machine.apply(this,arguments);
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

    function onReady() {
        console.log( 'Coffee is ready!' );
    }
    this.run = function() {
        if( ! this._enable){
            throw new Error ( 'cofeeMachine is turnoff');
        }
        timerId = setTimeout(onReady, 1000);
    };
var  parentDisable = this.disable;
    this.disable = function(){
        parentDisable.call(this);
        clearTimeout(timerId);
    }
}
var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable();