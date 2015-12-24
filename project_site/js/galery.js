$('.im').click(function() {
    $(this).height(400);
    $(this).width(600);
    $(this).off(); //removes the handler so that it only resizes once...
});
