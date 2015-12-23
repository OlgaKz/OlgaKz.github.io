var popup = document.body.getElementsByClassName('doc-name');
popup.addEventListener('click',showPopup);
function showPopup(){
    document.body.getElementsByClassName('popup-doc')[0].style.display = 'block';
}

