
function construct(Class) {
    var fun = Class.bind.apply(Class, arguments);
    return new fun();
}