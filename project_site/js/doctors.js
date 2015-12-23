var popup = document.body.getElementsByClassName('doc-name');
    popup[0].addEventListener('click', showPopup);

var buttonClose = document.body.getElementsByClassName('close');
    buttonClose[0].addEventListener('click', closePopup);
function closePopup(){
        document.body.getElementsByClassName('popup-doc')[0].style.display = 'none';
}
function showPopup(){
        document.body.getElementsByClassName('popup-doc')[0].style.display = 'block';
}
popup.onclick = function(event){
    var target = event.target;
    if(target.className!= 'popup-doc')return;
    showPopup(target);
};
buttonClose.onclick = function(event){
    var targetClose = event.target;
    if(targetClose.className!= 'close')return;
    closePopup(targetClose);
};

