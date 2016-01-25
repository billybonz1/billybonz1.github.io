$(document).ready(function(){
    $(".switch-menu").on("click",function(){
        $(this).toggleClass('active');
        $(".toolmenu").toggleClass('active');
    });
    var theme;
    $(".choose_color span").on("click",function(){
        $("body").removeClass(theme);
        theme = $(this).attr('class');
        $("body").addClass(theme);
    });
    video();
});
$(window).resize(function(){
    video();
});
function video(){
    var videoWidth = $("#video").width();
    var videoHeight = videoWidth*423/750;
    $("#video").height(videoHeight);
}