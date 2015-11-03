function getLongestWord(str) {
    var arr = [];
    arr = str.split(' ');
    var word = ' ';
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > word.length) {
            word = arr[i];
        }
    }
    return word;
}
console.log(getLongestWord('Web Development Tutorial'));