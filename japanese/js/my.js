var hRotator = {'timer':0,'cache':{},'id':0,'curr':false, 'stopped':true, 'clicked':false,'time':0};

hRotator.click = function(e) {
    if (typeof(Modernizr) != 'undefined' && Modernizr.touch && !hRotator.clicked && ($.now() - hRotator.time)<300 ) {
        hRotator.clicked = true;
        e.stopPropagation();    
        e.preventDefault();
        if (hRotator.stopped) hRotator.start.call(this);
    }
}

hRotator.start2 = function(el) {
    var t = $(el);
    t.bind('mouseout',hRotator.stop);
    hRotator.start.call(el);
}
 
hRotator.start = function(e) {
    var t = $(this);
    hRotator.stop();
    hRotator.curr = t;
    hRotator.id = t.attr('id');
    hRotator.time = $.now();
    hRotator.curr.css('background-position','0 0');
    if (!hRotator.cache[hRotator.id]) {
        img = new Image();
        img.loaded = false;
        hRotator.cache[hRotator.id] = img;
        img.vid = hRotator.id;
    } else img = hRotator.cache[hRotator.id];
    hRotator.stopped = false;
    if (!img.loaded) {
        t.parent().append('<span></span>');
        hRotator.loader = $('span',t.parent());
        $(img).bind('load',hRotator.onLoad);
        img.src = t.attr('sprite');
    } else {
        hRotator.begin();
    }
}

hRotator.stop = function() {
    hRotator.stopped = true;
    hRotator.clicked = false;
    clearTimeout(hRotator.timer);
    if (hRotator.curr) {
        hRotator.curr.css({'background-image':''});
        if (hRotator.loader) {
            hRotator.loader.remove();
            hRotator.loader = false;
        }
    }
    hRotator.id = false; hRotator.curr = false; hRotator.loader = false;
}

hRotator.onTime =  function(num) {
    clearTimeout(hRotator.timer);
    if (hRotator.stopped) {
        hRotator.stop();
        return true;
    }
    num++;
    if (num>9) num=0;
    pos = (num*-160)+'px 0px';
    hRotator.curr.css({'background-position':pos});
    hRotator.timer = setTimeout('hRotator.onTime('+num+')',500);
}

hRotator.onLoad = function(e) {
    this.loaded = true;
    if (this.vid != hRotator.id) {
        return true;
    }
    hRotator.begin();
}

hRotator.begin = function() {
    if (hRotator.loader) {
        hRotator.loader.remove();
        hRotator.loader = false;
    }
    hRotator.curr.css({'background-position': '0 0'});
    hRotator.curr.css({'background-image':'url('+hRotator.curr.attr('sprite')+')'});
    hRotator.onTime(-1);
}



function commentList(e) {
            if ($('#commentSub').css('display') == 'none') {
                $('#commentToggle .textHide').show();
                $('#commentToggle .textShow').hide();
                $('#commentBox h2.gr').css({'border-radius':0});
            } else {
                $('#commentToggle .textHide').hide();
                $('#commentToggle .textShow').show();
                $('#commentBox h2.gr').css({'border-radius':'0 0 3px 3px'});
            }
            $('#commentSub').slideToggle('fast');
}

function menuSearchIn(e) {
    $(this).addClass('selectEd').children('.list').show();   
}
function menuSearchOut(e) {
    $(this).removeClass('selectEd').children('.list').hide();
}
function menuLangIn(e) {
    $('a',this).css({'display':'block'});
}    
function menuLangOut(e) {
    $('a',this).not('.def').css({'display':'none'});
}





var xEvent = {};
xEvent.mIn = function (e) {
    var t = $(this);
    if (t.attr('overicon') && !t.hasClass('off')) t.children('.icon,.iconL').addClass(t.attr('overicon'));
    if ('ontouchstart' in document.documentElement) {
    } else {
        if (t.attr('hint')) xEvent.hintShow(t,t.attr('hint'));
        if (t.attr('hintL')) xEvent.hintShow(t,t.attr('hintL'), false, true, false);
        if (t.attr('hintB')) xEvent.hintShow(t,t.attr('hintB'), false, false, true);
    }
}

xEvent.mOut = function (e) {
    var t = $(this);
    if (t.attr('overicon')) t.children('.icon,.iconL').removeClass(t.attr('overicon'));
    if ('ontouchstart' in document.documentElement) {
    } else {
        if (t.attr('hint')) xEvent.hintHide(t);
        if (t.attr('hintL')) xEvent.hintHide(t);
        if (t.attr('hintB')) xEvent.hintHide(t);
    }
}

xEvent.hintShow = function (t, text, temporary, onLeft, onBottom) {
    var hintBox;
    if (typeof(temporary)!='undefined' && temporary) {

        $('#'+temporary).remove();
        $('body').append("<table class='hintBox' id='"+temporary+"'><tr><td><div class='box'><div class='txt'></div></div><div class='arrow'></div></td></tr></table>");
        hintBox = $('#'+temporary);
    } else {
        $('body').append("<table class='hintBox' id='hint'><tr><td><div class='box'><div class='txt'></div></div><div class='arrow'></div></td></tr></table>");
        hintBox = $('#hint');
    }
    if (onLeft) {
        hintBox.addClass('hintL');
    }
    else if (onBottom) {
        hintBox.addClass('hintB');
    }
    else {
        hintBox.removeClass('hintL');
        hintBox.removeClass('hintB');
    }
    
    var pos = t.offset();
    var w = t.attr('hintw'); 
    if (!w) {
        $('.box',hintBox).css({'width':'auto'});
        $('.txt',hintBox).css({'white-space':'nowrap'}).html(text);
    }
    else {
        $('.box',hintBox).css({'width':w+'px'});
        $('.txt',hintBox).css({'white-space':'normal'}).html(text);
    }
    var wB = hintBox.innerWidth()*1;
    var hB = hintBox.innerHeight()*1;
    var wT = t.innerWidth()*1;
    var hT = t.innerHeight()*1;
    var left = 0; var top = 0; var mleft = 0; var mtop = 0;
    if (onLeft) {
        left = pos.left-wB-5;
        top = pos.top+hT/2;
        mtop = -1*hT/2+1;
    }
    else if (onBottom) {
        left = pos.left+wT/2;
        top = pos.top+hB+3;
        mleft = -1*wB/2;
        mtop = +5;
    }
    else {
        left = pos.left+wT/2;
        top = pos.top-hB-10;
        mleft = -1*wB/2;
        mtop = -5;
    }
    var css = {'margin-left':mleft+'px','margin-top':mtop+'px','top':top+'px','left':left+'px'};
    hintBox.css(css);
    hintBox.show();
}

xEvent.hintHide = function(e) {
    $('#hint').remove();
}


function shareShow(e) {
    e.preventDefault();
    if ($(this).hasClass('down')) $(this).removeClass('down');
    else $(this).addClass('down');
    if (!$('.addThis').attr('filled')) {
        $.ajax({'url':'https://s7.addthis.com/js/300/addthis_widget.js#pubid=xhamster','dataType':'script','cache':false});
        //$('body').append('<script type="text/javascript" src="http://s7.addthis.com/js/300/addthis_widget.js#pubid=xhamster"></script>')
        $('.addThis').attr('filled',1);
    }
    $('#shareBox').slideToggle('fast');
}





$(document).ready(function(){
    $('#commentBox .canRoll').bind('click',commentList);
    $('#search .select').hover(menuSearchIn,menuSearchOut);
    $('.menuLang').hover(menuLangIn,menuLangOut);
    $('body').on('mouseenter','a,div,span,i,u,input',xEvent.mIn).on('mouseleave','a,div,span,i,input',xEvent.mOut);
    $('#btnShare').bind('click',shareShow);
});