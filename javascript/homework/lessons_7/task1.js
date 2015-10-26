function createFunctions(n) {
    var callbacks = [];
    for (var i=0; i<n; i++) {
        (function(a){
            callbacks.push(function(n){
                return a;
            });
        })(i);

    }

    return callbacks;
}