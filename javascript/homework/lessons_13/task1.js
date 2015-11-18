/**
 * Created by ol4ik on 11/18/2015.
 */
function CoffeeMachine(power, capacity){
    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("???????? ?????? ???? ?????????????");
        }
        if (amount > capacity) {
            throw new Error("?????? ?????? ???? ??????, ??? " + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = function() {
        return waterAmount;
    };
    this.getPower = function (){
        return power;
    }

}
var cofeeMachine = new CoffeeMachine(200,350);
console.log(cofeeMachine.getPower());