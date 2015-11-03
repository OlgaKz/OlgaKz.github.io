function getUpper(str){
var arr = str.split('');
    newArr = [];
    for (var i = 0; i < arr.length; i++);{
    newArr.push(arr[0].charAt().toUpperCase() + arr.slice(1).join(''))
    }
    return newArr;
}
console.log(getUpper('the quick brown fox'));