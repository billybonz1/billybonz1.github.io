function heightDetect(){
	$(".main_head").css('height', $(window).height());
};
function preLoader(){
	$(".loaderInner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
};

$(document).ready(function() {
	heightDetect();
});
$(window).load(function() { 
	preLoader();
});
$(window).resize(function(){
	heightDetect();
});