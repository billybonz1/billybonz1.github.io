(function(){
    objects = [
        [".main-slider-obj1","slideInUp"],
        [".main-slider-obj2","zoomIn"]
    ];
    currentSlide = 1;
    $('#main-slider').owlCarousel({
        navigation: true,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        touchDrag: false,
        mouseDrag: false,
        transitionStyle : "fade",
        afterInit:function(){
            console.log("After init");
            currentSlide = this.currentItem + 1;
            mainSliderAfter(objects,currentSlide);
        },
        beforeMove: function(){
            console.log("Before move");
            current = this.currentItem + 1;
            mainSliderBefore(objects,currentSlide);

        },

        afterAction:function(){
            console.log("After action");
            currentSlide = this.currentItem + 1;
            mainSliderAfter(objects,currentSlide);
        }
    });
    var main_slider = $("#main-slider").data('owlCarousel');
    function mainSliderAfter(objects,current){
        var object;
        objects.forEach(function(item, i, arr) {
          object = $(".owl-item:nth-child("+current+")").find(objects[i][0]);
          object.addClass(objects[i][1]);
        });
        object.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
            $('.main-slider-wrapper .timeline').addClass('full').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(e) {
                main_slider.next();
            });
        });
    }
    function mainSliderBefore(objects,current){
        $('.main-slider-wrapper .timeline').removeClass('full');
        objects.forEach(function(item, i, arr) {
          object = $(".owl-item:nth-child("+current+")").find(objects[i][0]);
          object.removeClass(objects[i][1]);
        });

    }
})();
