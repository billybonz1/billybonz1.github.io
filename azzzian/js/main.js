$(document).ready(function(){
	$("button.menu").on("click",function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(".sidebar").removeClass("active");
		}else{
			$(this).addClass("active");
			$(".sidebar").addClass("active");
		}	
	});

	var filterHeight = $(".filter").height();
	$(".filter").css("bottom","-"+filterHeight+"px");
	$(".filter").show();

	$(".filterBtn").on("click",function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(".filter").css("bottom","-"+filterHeight+"px");
		}else{
			$(this).addClass("active");
			$(".filter").css("bottom","0px");
		}	
	});

	$(".close").on("click",function(){
		$(".filterBtn").removeClass("active");
		$(".filter").css("bottom","-"+filterHeight+"px");
	});

	$(document).on("click",function(event){
		if( $(event.target).closest(".sidebar").length || $(event.target).closest("button.menu").length){
		}else{
			$("button.menu").removeClass("active");
			$(".sidebar").removeClass("active");
		}
		
		if($(event.target).closest(".filter").length || $(event.target).closest(".filterBtn").length){
		}else{
			$(".filterBtn").removeClass("active");
			$(".filter").css("bottom","-"+filterHeight+"px");
		}
		event.stopPropagation();
	});

	$(".owl-carousel").owlCarousel({
	    navigation : false, // Show next and prev buttons
	    slideSpeed : 300,
	    paginationSpeed : 400,
	    singleItem:true
	});
});


