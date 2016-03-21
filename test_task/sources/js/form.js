var info = {
    Москва: {
        email: "contactM@decorum-elite.ru",
        mobile: "+7 (495) 543-45-80"
    },
    Красноярск: {
        email: "contactK@decorum-elite.ru",
        mobile: "+7 (695) 543-45-80"
    },
    Oмск: {
        email: "contactO@decorum-elite.ru",
        mobile: "+7 (295) 543-45-80"
    },
    Екатеринбург: {
        email: "contactE@decorum-elite.ru",
        mobile: "+7 (895) 543-45-80"
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


