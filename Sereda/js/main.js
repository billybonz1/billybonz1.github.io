(function(){
	var active_service = "";
	var active_service_icon = "";
	var in_effect = "zoomIn animated";
	var out_effect = "zoomOut animated"
	var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$(".services div").click(function(){
		var toggle = $(this).data("toggle");
		$(".services div").removeClass('active');
		if(active_service && active_service != toggle){
			$(this).addClass('active');
			$(active_service).addClass(out_effect).one(animationend, function(){
				$(active_service).removeClass('opacity1').removeClass(out_effect);
				$(toggle).addClass(in_effect).addClass('opacity1').one(animationend, function(){
					$(toggle).removeClass(in_effect);
				});
				active_service = toggle;
			});
			/*$(active_service).hide("scale",function(){
				$(toggle).show("scale");
				active_service = toggle;
			});*/
		}else if(active_service == toggle){
			$(this).removeClass('active');
			$(active_service).addClass(out_effect).one(animationend, function(){
				$(active_service).removeClass('opacity1').removeClass(out_effect);
				active_service = "";
			});
		}else{
			$(toggle).addClass(in_effect).addClass('opacity1').one(animationend, function(){
				$(toggle).removeClass(in_effect);
			});
			active_service = toggle;
			$(this).addClass('active');
		}
	});

	$(document).on("click",function(event){
		if( $(event.target).closest(".services div").length || $(event.target).closest(".services-text div").length ) 
		return;
		$(active_service).addClass(out_effect).one(animationend, function(){
			$(active_service).removeClass('opacity1').removeClass(out_effect);
			active_service = "";
		});
		$(".services div").removeClass('active');
		event.stopPropagation();
	});

	$(".close").on("click",function(event){
		$(active_service).addClass(out_effect).one(animationend, function(){
			$(active_service).removeClass('opacity1').removeClass(out_effect);
			active_service = "";
		});
		$(".services div").removeClass('active');
	});

	var checkHeight = function(){
		var total_height = $("header").height() + $(".main").height();
		var window_height = $(window).height();
		var service_text_height = window_height - total_height - 20;
		if(service_text_height < 200){
			$(".services-text div").addClass("fixed").css({
				"top":$("header").height() + "px"
			});
		}else{
			$(".services-text div").removeClass("fixed").attr("style","");
		}
		console.log(service_text_height);
	}
	checkHeight();
	$(window).resize(function(event) {
		checkHeight();
	});
})();