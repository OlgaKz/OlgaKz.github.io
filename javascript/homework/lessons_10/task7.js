function shuffle(arr){
    for( var i = arr.length-1; i>=0; i--) {
        //console.log(arr[i]);
        var randomIndex = Math.floor(Math.random()*(i+1));
        console.log(randomIndex);
        var b = arr[randomIndex];
        arr[randomIndex] = arr[i];
        arr[i] = b;
    }
    return arr;
}


var myArr = [1,2,3,4,5,6,7,8,9];
console.log(shuffle(myArr));