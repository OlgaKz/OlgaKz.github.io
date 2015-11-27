function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
}
Ship.prototype.isWorthIt = function(){
    var crewDraft = this.crew * 1.5;
    return (this.draft - crewDraft)>20;
};
var ship = new Ship(15, 5);
console.log(ship.isWorthIt());