function sumArgs() {
    //1 ???????
    // arguments.reduce = [].reduce;
    //return arguments.reduce(function(a,b){
    // return a + b;
    // });2 ???????
    return [].reduce.call(arguments, function (a, b) {
        return a + b;
    });
}
console.log( sumArgs(1, 9, 3) );

