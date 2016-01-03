$(document).ready(function(){
    $('.zoom-galery').hide();
    $('.zoom').click(function(e) {
        $(e.target).parent().children('.zoom-galery').show();
    })
});