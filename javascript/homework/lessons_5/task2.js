var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};


function multiplyNumeric(myObj) {
    for (item in myObj) {
        if ((typeof(myObj[item]) != 'string') && (typeof (myObj[item]) == 'number')) {
            myObj[item] = myObj[item] * 2;
        }
    }
    return myObj;
}


console.log(multiplyNumeric(image));
