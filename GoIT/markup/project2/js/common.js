$(document).ready(function(){
	var scrollTopMax
	$('.zoom').click(function(e){
		var scrollTop = $(window).scrollTop();
		var top = scrollTop + 100;
		scrollTopMax = parseInt($(document).height()) - parseInt($(".preview").height());
		$('.popup').css("top",top+"px");
		e.preventDefault();
		var url = $(this).attr("href");
		$(".preview").attr("src",url);
		$('.overlay-mask,.popup').fadeIn(500);
	});
	$(window).on("scroll",function(){
		var scrollTop = parseInt($(window).scrollTop());
		var top = scrollTop + 100;
		if(top < scrollTopMax){
			$('.popup').css("top",top+"px");
		}
	});
	$('.close-button').click(function(e){
		$('.overlay-mask,.popup').fadeOut(500);
	});
});