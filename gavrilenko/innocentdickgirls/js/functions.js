var slideshow_playing=0;
var images_cash=new Array();
var sliding_tumbs=0;

	function thumbs_height(){
		$(".bottom-block").each(function(){
			var thumbs_h = $(this).find(".tumbs").height() - 40;
			var text_h = $(this).find(".text").height();
			if(thumbs_h > text_h){
				$(this).find(".text").height(thumbs_h);
			}else{
				$(this).find(".text").css("height","auto");
			}
		});
	}

	$(document).ready(function () {
		$(document).on('click','a.smooth_slide',function(event){
			$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 1500);
			event.stopPropagation();
			return false;
		});
		$('.join_popup_show').click(function(event){
			$('#join_popup').show();
			var popup_height = document.getElementById('join').offsetHeight+60;
			$("#join").css('top',(($(window).height()-popup_height)/2));
			$("body").css("overflow", "hidden");
			event.stopPropagation();
			return false;
		});
		$('.overlay').click(function(){
			$('#join_popup').hide();
			$("body").css("overflow", "");
			event.stopPropagation();
			return false;
		});
		$('a.thumb').click(function(event){
			$('img.thumbviwer').attr('src',$(this).attr('href'));
			$('ul.tumbs>li').removeClass('active');
			$(this).parent().addClass('active');
			event.stopPropagation();
			return false;
		});
		$('.fancyboxm').fancybox({});
		$('.fancybox').fancybox({
                  afterLoad: function(current, previous) {
                       if (previous) {
				if (previous.index==5){
	                           console.info( 'prev six ');
					$.fancybox.close();
                			$('#join_popup').show();
                			var popup_height = document.getElementById('join').offsetHeight+60;
                			$("#join").css('top',(($(window).height()-popup_height)/2));
                			$("body").css("overflow", "hidden");
                			event.stopPropagation();
                			return false;					
				}
                       }
                   },
		});
		$('a.slider_thumb').click(function(event){
			set_slider_main_image($(this).attr('href'),1);
			set_slide_descr($(this).attr('descr'),$(this).attr('slink'));
			$('a.slider_thumb').parent().removeClass('active');
			$(this).parent().addClass('active');
			event.stopPropagation();
			return false;
		});
		$('a.next').click(function(event){
			if (!$('li.active').not('.popup').is(':last-child')){
				next=$('li.active').next();
				set_slider_main_image($(next).children().attr('href'),1);
				set_slide_descr($(next).children().attr('descr'),$(next).children().attr('slink'));
				$('a.slider_thumb').parent().removeClass('active');
				$(next).addClass('active');
			}
			make_cur_visible();
			event.stopPropagation();
			return false;
		});
		$('a.prev').click(function(event){
			if (!$('li.active').not('.popup').is(':first-child')){
				prev=$('li.active').prev();
				set_slider_main_image($(prev).children().attr('href'),2);
				set_slide_descr($(prev).children().attr('descr'),$(prev).children().attr('slink'));
				$('a.slider_thumb').parent().removeClass('active');
				$(prev).addClass('active');
			}
			make_cur_visible();
			event.stopPropagation();
			return false;
		});
		$('a.s-next').click(function(event){
			if (sliding_tumbs==0){
				if (($('ul.items').width()-Math.abs($('ul.items').position().left))>$('div.items').width()){
					sliding_tumbs=1;
					if ($('ul.items').width()-Math.abs($('ul.items').position().left)-$('div.items').width()>=550){
						offset=550;
					}else{
						offset=$('ul.items').width()-Math.abs($('ul.items').position().left)-$('div.items').width();
					}
					$('ul.items').animate({left:$('ul.items').position().left-offset},{complete: function (){sliding_tumbs=0;}});
				}
			}
			event.stopPropagation();
			return false;
		});
		$('a.s-prev').click(function(event){
			if (sliding_tumbs==0){
				if ($('ul.items').position().left<0){
					sliding_tumbs=1;
					if (Math.abs($('ul.items').position().left)>=550){
						offset=550;
					}else{
						offset=Math.abs($('ul.items').position().left);
					}
					$('ul.items').animate({left:$('ul.items').position().left+offset},{complete: function (){sliding_tumbs=0;}});
				}
			}
			event.stopPropagation();
			return false;
		});
		$('a.play').click(function(event){
			slideshow_playing=1;
			$(this).hide();
			$('a.pause').show();
			play_slides();
			event.stopPropagation();
			return false;
		});
		$('a.pause').click(function(event){
			$(this).hide();
			$('a.play').show();
			slideshow_playing=0;
			event.stopPropagation();
			return false;
		});

		thumbs_height()

	});

	$(window).resize(function(){
		thumbs_height();
	});
$(window).load(function (){
		thumbs_height();
		$('a.slider_thumb').each(function(){
			img=new Image();
			img.src=$(this).attr('href');
			images_cash.push(img);
		});

		$('ul.fhg3>li>a').each(function(){
			img=new Image();
			img.src=$(this).attr('href');
			images_cash.push(img);
		});

		window.setTimeout(function(){
		slideshow_playing=1;
		$('a.play').hide();
		$('a.pause').show();
		play_slides();
		},4000);
});

function set_slider_main_image(href,direction)
{
//	$('img.slider_main').attr('src',href);
/*
	$('img.slider_main').parent().css('background-image','url('+href+')');
	if (direction==1){
        	$('img.slider_main').animate({
                	left: "-2000px",
        	    }, {
        		complete: function (){
        			$('img.slider_main').attr('src',href);
        			$('img.slider_main').css('left','0px');
        		}
        		});
	}else{
        	$('img.slider_main').animate({
                	left: "2000px",
        	    }, {
        		complete: function (){
        			$('img.slider_main').attr('src',href);
        			$('img.slider_main').css('left','0px');
        		}
        		});
	}
*/
	$('img.slider_main').parent().css('background-image','url('+href+')');
       	$('img.slider_main').animate({
               	opacity: "0",
       	    }, {
       		complete: function (){
       			$('img.slider_main').attr('src',href);
       			$('img.slider_main').css('opacity','1');
       		}
       		});
	
}
function set_slide_descr(descr,slink)
{
	$('#slide_descr').html(descr);
//	$('#slide_descr_link').attr('href',slink);
}
function play_slides()
{
	if (slideshow_playing==1){
		if (!$('li.active').not('.popup').is(':last-child')){
			next=$('li.active').not('.popup').next();
		}else{
			next=$('li.active').not('.popup').siblings().filter(":first");
		}
		set_slider_main_image($(next).children().attr('href'),1);
		set_slide_descr($(next).children().attr('descr'),$(next).children().attr('slink'));
		$('a.slider_thumb').parent().removeClass('active');
		$(next).addClass('active');
		make_cur_visible();
		window.setTimeout(play_slides, 4000);
	}
}
function make_cur_visible()
{
	if ($('li.active').not('.popup').length){
        	pos = $('li.active').not('.popup').position();
        	if (pos.left>=($('div.items').width()+Math.abs($('ul.items').position().left))){
				if (($('ul.items').width()-Math.abs($('ul.items').position().left))>$('div.items').width()){
					sliding_tumbs=1;
					if ($('ul.items').width()-Math.abs($('ul.items').position().left)-$('div.items').width()>=550){
						offset=550;
					}else{
						offset=$('ul.items').width()-Math.abs($('ul.items').position().left)-$('div.items').width();
					}
					$('ul.items').animate({left:$('ul.items').position().left-offset},{complete: function (){sliding_tumbs=0;}});
				}
  		}else if(pos.left<Math.abs($('ul.items').position().left)){
					$('ul.items').animate({left:0},{complete: function (){sliding_tumbs=0;}});
		}
/*
        	pos = $('li.active').not('.popup').position();
        	if (pos.left>=($('div.items').width()+Math.abs($('ul.items').position().left))){
        		$('ul.items').animate({left:$('div.items').width()-pos.left-110});
        	}else if(pos.left<Math.abs($('ul.items').position().left)){
        		$('ul.items').animate({left:pos.left*-1});
        	}
*/
	}
}
