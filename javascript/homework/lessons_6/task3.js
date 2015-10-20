function randOrd() {
    return (Math.round(Math.random()) - 0.5);
}


var arr = [1, 2, 3, 4, 5];
arr.sort(randOrd);
console.log(arr);