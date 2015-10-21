function isPal(string) {
    string = string.toLowerCase().split('');
    for (var i = 0; i < string.length; i++) {
        if (string[0] == '') {
            string.splice(i, 1);
        }
    }
    var stringRevers = string.reverse().join('');
    string = string.reverse().join('');
    if (string === stringRevers) {
        return true;
    }
    return false;
}
console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212'));