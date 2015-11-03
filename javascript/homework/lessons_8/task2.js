/**
 * Created by sone4ko_29 on 10/27/2015.
 */
function Calculator() {
    var methods = {
        '+': function (a,b) {
            return a + b
        },
        '-': function (a,b) {
            return a - b
        }
    };
    this.calculate = function (str) {
        arr = str.split(' ');
        var a = +arr[0];
        var b = +arr[2];
        var op = arr[1];
        return methods[op](+a,+b);
    };

    this.addMethod = function(name,func){
        methods[name] = func;
    }
}

var calc = new Calculator();
calc.addMethod("*", function(a, b) {
    return a * b;
});
calc.addMethod("/", function(a, b) {
    return a / b;
});
calc.addMethod("**", function(a, b) {
    return Math.pow(a, b);
});

console.log(calc.calculate('2 + 7') );
console.log(calc.calculate('12 - 6'));
console.log(calc.calculate('3 * 5'));