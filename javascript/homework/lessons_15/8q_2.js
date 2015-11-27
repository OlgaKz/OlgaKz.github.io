function Ghost() {
    var color = ['white','yellow','purple','red'];
    this.color = color[Math.floor(Math.random()*color.length)];
}
var ghost = new Ghost;
console.log(ghost.color);