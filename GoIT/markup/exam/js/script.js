var buttonImgLeft = document.getElementsByClassName('products_jumbotron_image_overlay_btn_left');
var buttonImgRight = document.getElementsByClassName('products_jumbotron_image_overlay_btn_right');
var images = document.getElementsByClassName('products_jumbotron_image');
var active = 0;

for(var i = 0; i < images.length; i++) {
	if(i != active){
		images[i].style.display = "none";
	}
}

var changeImageRight = function() {
	images[active].style.display = "none";
	active++;
	if (active < images.length){
		images[active].style.display = "block";
	} else{
		active = 0;
		images[active].style.display = "block";
	}		
};

var changeImageLeft = function() {
	images[active].style.display = "none";
	active--;
	if (active >= 0){
		images[active].style.display = "block";
	} else{
		active = images.length - 1;
		images[active].style.display = "block";
	}		
};

for(var i=0;i<buttonImgRight.length;i++){
        buttonImgRight[i].addEventListener('click', changeImageRight, false);
    }

for(var i=0;i<buttonImgLeft.length;i++){
        buttonImgLeft[i].addEventListener('click', changeImageLeft, false);
    }
