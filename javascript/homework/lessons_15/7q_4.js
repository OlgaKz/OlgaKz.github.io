Array.prototype.reverse = function() {
    var array = [];
    var length = this.length;
    for (var i = length - 1; i >= 0; i--){
        array.push(this[i])
    };
    for ( var i = 0; i < length; i ++){
        this[i] = array[i];
    }
    return this;
};
