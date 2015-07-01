$(document).ready(function(){

	/* TOP MENU SLIDE*/
	(function($){
		var top_mnu_enter_checker = false;
		$(".rubricator-shower").on("mouseenter", function(){
			if (!$(this).hasClass("active")){
				$(this).addClass("active")
				$(".top-mnu").slideDown(400);
			}
			top_mnu_enter_checker = true;
			console.log('rubricator-shower mouseenter');
		});

		$(".rubricator-shower").mouseout(function(event) {
			if(!$(event.relatedTarget).hasClass("top-mnu")){
				$(this).removeClass("active")
				$(".top-mnu").slideUp(400);
			}
			console.log('rubricator-shower mouseout');
		});

		$(".top-mnu").on("mouseleave",function(event){
			if(!$(event.relatedTarget).hasClass("rubricator-shower")){
				$(".rubricator-shower").removeClass("active")
				$(this).slideUp(400);
			}
			top_mnu_enter_checker = false;
			console.log('top-mnu mouseleave');
		});

		$(".header-select").selectpicker({
	      size: 4
	 	});
	 	$(".category-news__sorting select").selectpicker({
	      size: 4
	 	});
	})(jQuery);
	
	/**/

	/*BG CHANGE*/
	(function($){
		$(".change-bg__value").click(function(){
			if(!$(this).hasClass('active')){
				var old_bg = $(".change-bg__value.active").data("value");
				var bg = $(this).data("value");
				$(".change-bg__value.active").removeClass("active");
				$(this).addClass("active")
				$("body").removeClass("bg-"+old_bg).addClass('bg-'+bg);
			}
		});
	})(jQuery);
	
	/**/
	/*SMOOTH SCROLLLING*/
	/*$.srSmoothscroll({
        step: 120,
        speed: 800
    });*/
	/**/


	/*SLIDERS*/
	(function($){
		$(".mt-horizontal.owl").owlCarousel({
	      navigation : false, // Show next and prev buttons
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      singleItem:true,
	      autoPlay:true,
	      stopOnHover:true
		});
		var hot_topics = $("#hot-topics .owl");
		hot_topics.owlCarousel({
	      items:3, //10 items above 1000px browser width
	      itemsDesktop : [1422,2], //5 items between 1000px and 901px
	      itemsDesktopSmall : [900,2], // betweem 900px and 601px
	      itemsTablet: [600,2], //2 items between 600 and 0
	      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
		});

		$("#hot-topics .hot-topics_next").click(function(){
			hot_topics.trigger('owl.next')
		});

		$("#hot-topics .hot-topics_prev").click(function(){
		    hot_topics.trigger('owl.prev');
		});

		var week_actual = $("#week-actual .owl");
		week_actual.owlCarousel({
	      items:3, //10 items above 1000px browser width
	      itemsDesktop : [1422,2], //5 items between 1000px and 901px
	      itemsDesktopSmall : [900,2], // betweem 900px and 601px
	      itemsTablet: [600,2], //2 items between 600 and 0
	      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
		});

		$("#week-actual .hot-topics_next").click(function(){
			week_actual.trigger('owl.next')
		});

		$("#week-actual .hot-topics_prev").click(function(){
		    week_actual.trigger('owl.prev');
		});
	})(jQuery);
	/**/

	/*NEWS PAGE SHOW MORE ANIMATION*/
	(function($){
		$("button[role=hot-topics-more]").click(function(){
			var wrap = $(this).data("wrap");
			wrap_scroll_top = $(wrap).offset().top;
			$("body, html").animate({
				scrollTop: wrap_scroll_top - 60
			}, 500,function(){
				$(wrap).find(".hot-topics__item.old").hide("slow",function(){
				});
				$(wrap).find(".hot-topics__item.hidden").removeClass("hidden");
				
			});
			
			
		});
	})(jQuery);
	/**/

	/*SCROLL TO TOP*/
	$(".content").waypoint(function(direction) {
		if (direction === "down") {
			$("#top").addClass("visible");
		} else if (direction === "up") {
			$("#top").removeClass("visible");
		};
	}, {offset: -200});

	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	/**/

	/*FIXED HEADER*/
	$("#main_header").waypoint(function(direction) {
		if (direction === "down") {
			$("body").addClass("fixed");
			$(".header__wrap").animate({"top":"0px"},600);
		} else if (direction === "up") {
			$(".header__wrap").animate({"top":"-45px"},200,function(){
				$("body").removeClass("fixed");
			});
			
		};
	}, {offset: -150});
	/**/
	
	
	/*RATING*/
	$("#news-page-rating").rating({
		'size':'xs',
		'showClear':false,
		'showCaption':false
	});
	/**/
});

(function($, document, window, viewport) {
function resizeWindow() {
	/*HTML FONT SIZE*/
	if($(document).width() < 1166 && $(document).width() > 750){
		var htmlFS = $(document).width()*10/1166;
	}else{
		var htmlFS = 10;
	}
	$("html").css("font-size",htmlFS+'px');

	/*FIXED HEADER*/
	var scrollTop = parseInt($("body").scrollTop()) || parseInt($("html").scrollTop());
	if(scrollTop < 100){
		$("body").removeClass('fixed');
	}
	/**/

	/**/

	
}
$(document).ready(function() {
	resizeWindow();
});
$(window).resize(function() {
	viewport.changed(function(){
		resizeWindow();
	});
});
})(jQuery, document, window, ResponsiveBootstrapToolkit);