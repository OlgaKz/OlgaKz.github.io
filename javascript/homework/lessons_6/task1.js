var obj = {
    className: 'open menu'
};
function removeClass(obj, cls) {

    //var classes = obj.className ? obj.className.split(' ') : [];
    var classes = obj.className.split(' ');
    //console.log(classes);
    for (var i in classes ){
        if (classes[i] == cls) {
            classes.splice(i,1);
        }
    }
    //console.log(classes);

    var str = classes.join(' ');
    //console.log(str);
    obj.className = str;
    return obj;
}

removeClass(obj, 'open');
//removeClass(obj, 'blabla');
console.log(obj.className);
