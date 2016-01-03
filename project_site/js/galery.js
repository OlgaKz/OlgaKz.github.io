$(".item-galery").on("click", ".zoom", function (event) {

    //let's get parent and then it's child with certain class name
    var parentElem = $(this).parent();
    var childImageElem = parentElem.find(".images");
    //let's prepare our zoom-image block
    $(".zoom-image").attr("src", childImageElem.attr('src'));
    $(".zoom-galery").css("display", "inline");

    // add wrapper
    $("body").append("<div id='overlay'></div>");
    $('#overlay').show().css({'filter': 'alpha(opacity=80)'});
    return false;

});
$('button.close').click(function () {
    $(this).parent().fadeOut(100);
    $('#overlay').remove('#overlay');
    return false;
});