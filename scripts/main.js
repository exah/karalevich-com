// PROJECT COVER VIEWPORT ANIMATION

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + ($(window).height() + ($(elem).height() / 2));

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function () {
  $('.col-viewport').each(function () {
    if (isScrolledIntoView(this) === true) {
      $(this).removeClass('col-viewport')
    }
  });
});


// VIMEO AUTOPLAY IN VIEWPORT

$(window).scroll(function () {
  $('.vimeo-viewport-autoplay').each(function () {
    if (isScrolledIntoView(this) === true) {
      $(this).attr('src', $(this).attr('src') + '&autoplay=1')
    } else {

    }
  });
});


// PROJECT COVER HOVER ON INDEX

$('.project').hover(function() {
  $(this).find('img, video').addClass('project-hover');
  $(this).find('.project-desc').addClass('elem-opacity--1');
}, function() {
    $(this).find('img, video').removeClass('project-hover');
    $('.project-desc').removeClass('elem-opacity--1');
});


// PROJECT LIST ACTION

$('#project-link').click(function() {
  $('#project-list').removeClass('elem-hide');
  $('body').addClass('text-white');
  $('body').css('background', 'black');
  $('body').css('transition', 'all 0.5s ease');
  $('.a-menu').addClass('a-menu--white');
  $('.a-page').addClass('a-menu--white elem-opacity--04');
  $('.text-grey').addClass('text-white elem-opacity--04');
})


// PROJECT LIST ITEM HOVER

$('.bubble-project').hover(function() {
  $(this).find('.project-title').removeClass('elem-opacity--04');
}, function() {
  $(this).find('.project-title').addClass('elem-opacity--04');
})


// PROJECT BG TOGGLE COLOR TRANSITION

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 180) {
      if ($('div').hasClass('bg-change')) {
        $('body').addClass('text-white');
        $('body').addClass('.bg-black');
        $('body').css('transition', 'all 0.5s ease');
        $('.a-menu').addClass('a-menu--white');
        $('.text-grey').addClass('text-white elem-opacity--04');
        $('.ratio-wrap').css('background', '#1A1A1A');
      } else if (scroll == 0) {
        $('body').removeClass('text-white');
        $('body').removeClass('.bg-black');
        $('.a-menu').removeClass('a-menu--white');
        $('.text-grey').removeClass('text-white elem-opacity--04');
      }
    }
});


// MENU ELEMENT REVEAL ON SCROLL

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
      $('.menu-fixed').removeClass('menu-is-hidden')
    } else {
        $('.menu-fixed').addClass('menu-is-hidden')
    }
});


// FIXED MENU ON HOVER

$('.menu-fixed').mousemove(function(event) {
  if(isNear($('.menu-fixed'), 60, event)) {
    $('.menu-fixed').addClass('elem-opacity--0');
  } else {
    $('.menu-fixed').addClass('elem-opacity--1');
  };
});

function isNear( $element, distance, event ) {

    var left = $element.offset().left - distance,
        top = $element.offset().top - distance,
        right = left + $element.width() + ( 2 * distance ),
        bottom = top + $element.height() + ( 2 * distance ),
        x = event.pageX,
        y = event.pageY;

    return ( x > left && x < right && y > top && y < bottom );

};


// INTRO ANIMATION

$(window).scroll(function(){
  $(".p-intro").css("opacity", 1 - $(window).scrollTop() / 400);
});


// LAZY LOAD

lazyload();
