function Machine(power){
    this.enable = function() {
        this._enable = true;
    };
    this.disable = function(){
        this._enable = false;
    }
}
function Fridge(power){
    Machine.call(this, arguments);
    var food = [];
    this.addFood = function(){
        if( ! this._enable){
            throw new Error ('Fridge is turnoff');
        }
        if( food.length + arguments.length >= this.power/100){
            throw new Error ( 'Cannot add more food');
        }
        for( var i = 0; i < arguments.length; i++){
            food.push(arguments[i]);
        }
    };
    this.getFood = function(){
        return food.slice()
    }
}
var fridge = new Fridge(600);
fridge.enable();
console.log(fridge.addFood('juse','milk'));
console.log(fridge.getFood());