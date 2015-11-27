function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
}

var name = new NameMe('John', 'Doe');
console.log(name.firstName);
console.log(name.lastName);
console.log(name.name);