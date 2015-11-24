function Humster() {
    this.food = [];
}
Humster.prototype.found = function(something) {
    this.food.push(something);
};
var speedy = new Humster;
var lazy = new Humster;
speedy.found('apple');
console.log(speedy.food.length);
console.log(lazy.food.length);
