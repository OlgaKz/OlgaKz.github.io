var info = {
    Chernihiv: {
        email: "Chernihiv@email.com",
        mobile: "+380931456789"
    },
    Kiev: {
        email: "Kiev@email.com",
        mobile: "+380932456789"
    },
    Odessa: {
        email: "Odessa@email.com",
        mobile: "+380933456789"
    },
    Lviv: {
        email: "Lviv@email.com",
        mobile: "+380934456789"
    }
};

// create select drop box
var formElem = document.forms[0].elements[0];
for (var i =0; i<Object.keys(info).length;i++){
    newOption = document.createElement('option');
    newOption.value = Object.keys(info)[i];
    newOption.text = Object.keys(info)[i];
    formElem.appendChild(newOption);
}
console.log(newOption);

// work with select elements
var elemSelect = document.forms[0].elements[0];
elemSelect.addEventListener(
    'change',
    function () {
        currentCity = elemSelect.options[elemSelect.selectedIndex].value;
        console.log(currentCity);
        console.log(info[currentCity].email +
            '\n' + info[currentCity].mobile);
        var emailElem = document.getElementsByClassName('email')[0];
        emailElem.innerHTML = info[currentCity].email;
        var mobileElem = document.getElementsByClassName('mobile')[0];
        mobileElem.innerHTML = info[currentCity].mobile;
    }, false
);


