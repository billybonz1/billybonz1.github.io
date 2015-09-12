$(document).ready(function() {

	var testimonials_counter = 0;
	var t1 = 0,t2 = 0,to1,to2;
	$(".testimonials__item").each(function(){
		testimonials_counter++;
		if(testimonials_counter == 1){
			t1 = $(this).height();
			to1 = $(this)
		}
		if(testimonials_counter == 2){
			t2 = $(this).height();
			to2 = $(this);
			max = Math.max(t1,t2);
			to1.height(max);
			to2.height(max);
			testimonials_counter = 0;
		}
	});

	/*Валидатор*/
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".catch-form").each(function(){
		$(this).validate({
		  rules: {
		    // simple rule, converted to {required:true}
		    name: "required",
		    // compound rule
		    phone: {
		    	required: true,
		    },
		    email: {
		      required: true,
		      email: true
		    },
		    submitHandler: function(form) {
		    	$(form).preventDefault();
			    $.ajax({
					type: "POST",
					url: "mail.php",
					data: $(form).serialize()
				}).done(function() {
					alert("Спасибо за заявку!");
					setTimeout(function() {
						$(form).trigger("reset");
					}, 1000);
				});
				return false;
			}
		  }
		});
	});

	$(".catch-form").submit(function(e){
        e.preventDefault();
    });

	/* Счетчики */
	$(".countdown").countdown('2015/10/10', function(event) {
	   $(this).html(event.strftime('<div><strong>%D</strong> дней</div><div><strong>%H</strong> часов</div><div><strong>%M</strong> минут</div><div><strong>%S</strong> секунд</div>'));
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
