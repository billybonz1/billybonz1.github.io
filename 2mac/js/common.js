$(document).ready(function() {

	$('.scrollup').click(function () {
	    $("html, body").animate({
	        scrollTop: 0
	    }, 600);
	    return false;
	});


	if($(window).scrollTop() > 600){
		$('.scrollup').addClass("visible");
	}else{
		$('.scrollup').removeClass("visible");
	}
	$(window).on("scroll",function(){
		if($(this).scrollTop() > 600){
			$('.scrollup').addClass("visible");
		}else{
			$('.scrollup').removeClass("visible");
		}
	});

	if($(".main-header__slider").length){
		var msowl = $(".main-header__slider .owl-carousel");
		msowl.owlCarousel({
		      navigation : false, // Show next and prev buttons
		      pagination: true,
		      slideSpeed : 300,
		      paginationSpeed : 400,
		      singleItem:true
		});
		$(".icon-msright").click(function(){
		    msowl.trigger('owl.next');
		});
		$(".icon-msleft").click(function(){
		    msowl.trigger('owl.prev');
		});
	}


	if($(".catalog-by-models__slider").length){
		var cbmowl = $(".catalog-by-models__slider .owl-carousel");
		cbmowl.owlCarousel({
		    items : 4,
		    pagination: false
		});
		$(".catalog-by-models__slider .icon-cright").click(function(){
		    cbmowl.trigger('owl.next');
		});
		$(".catalog-by-models__slider .icon-cleft").click(function(){
		    cbmowl.trigger('owl.prev');
		});
	}

	if($(".main-articles__slider").length){
		var asowl = $("#article-slider");
		asowl.owlCarousel({
		    items : 2,
		    pagination: false
		});
		$("#article-slider + div .icon-cright").click(function(){
		    asowl.trigger('owl.next');
		});
		$("#article-slider + div .icon-cleft").click(function(){
		    asowl.trigger('owl.prev');
		});

		var vsowl = $("#video-slider");
		vsowl.owlCarousel({
		    items : 2,
		    pagination: false
		});
		$("#video-slider + div .icon-cright").click(function(){
		    vsowl.trigger('owl.next');
		});
		$("#video-slider + div .icon-cleft").click(function(){
		    vsowl.trigger('owl.prev');
		});
	}
	

	/*Repair Tabs*/
	$(".repair-block__tab").on("click",function(e){
		e.preventDefault();
		$(".repair-block .active").removeClass('active');
		$(this).addClass('active');
		var visible_block = $(this).attr("href");
		$("div[data-tab="+visible_block+"]").addClass('active');
	});

	$(".choose_model").on("click",function(e){
		e.preventDefault();
		$(".choose_model.active").removeClass('active');
		$(this).addClass('active');

	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
