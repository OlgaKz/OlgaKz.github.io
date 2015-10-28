var make_lazy = function (operation,a,b) {
    var args = arguments;
    return function(){
        return args[0].apply(args, [].splice.call(args,1))
    }
};
