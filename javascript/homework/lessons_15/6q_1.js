function NamedOne(first, last) {
    this.firstName = first;
    this.lastName = last;
    Object.defineProperty( this, "fullName",{
        set: function(value){
            var splited = value.split(' ');
            if(splited.length == 2){
                this.firstName = splited[0];
                this.lastName = splited[1];
            }
        },
        get: function () {
            return this.firstName+' '+this.lastName;
        }
    });
}
var n = new NamedOne('John', 'Doe');
console.log(n.fullName);
n.firstName = "Bill";
console.log(n.fullName);
n.lastName = "Board";
console.log(n.fullName);
n.fullName = "Giovanni Fabbri";
console.log(n.firstName);
