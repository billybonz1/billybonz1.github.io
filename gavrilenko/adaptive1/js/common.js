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
    $('.up').mouseover( function(){
        $( this ).animate({opacity: 0.65},100);
    }).mouseout( function(){
        $( this ).animate({opacity: 1},100);
    }).click( function(){
        window.scroll(0 ,0);
        return false;
    });

    $(window).scroll(function(){
        if ( $(document).scrollTop() > 0 ) {
            $('.up').fadeIn('fast');
        } else {
            $('.up').fadeOut('fast');
        }
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