function getMaxNumber(arr) {
    var max = arr[0];
    for (var i = 0; i<arr.length; i++){
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
console.log(getMaxNumber([1,30,40,2,7]));
