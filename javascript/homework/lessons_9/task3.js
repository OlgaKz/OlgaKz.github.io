function work(a, b) {
    console.log(a + b);
}

function makeLogging(func, log) {
    function wrapper() {
        log.push([].slice.call(arguments));
        return func.apply(this, arguments);
    }

    return wrapper;
}

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
    var args = log[i]; // ?????? ?? ?????????? i-?? ??????
    console.log('Log:' + args.join()); // "???:1,2", "???:4,5"
}
