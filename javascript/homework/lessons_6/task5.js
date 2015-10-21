function isPal(string){
    var arr = [];
    arr = string.slice();
    var arrRev = arr.split(' ').reverse().join(' ');
    if(arrRev === string){
        return true
    } else if( arrRev != string){
        return false
    }
}
console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212'));