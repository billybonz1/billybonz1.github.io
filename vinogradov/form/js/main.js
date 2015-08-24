(function(){
	$("form").validate({
	  rules: {
	    name: "required",
	    email: {
	      required: true,
	      email: true
	    },
	    phone: {
	    	required: true
	    }
	  },
	  submitHandler:function(){
	  	$.ajax({
	  		method:"POST",
		  	url: "mail.php",
		  	data: $("form").serialize(),
		  	dataType: "text"
		})
		  .done(function( data ) {
		    $(".popup").fadeIn(100);
		    $("form")[0].reset();
		  });
	  }
	});
	$(".popup button").click(function(){
		$(".popup").fadeOut(100);
	})
})();