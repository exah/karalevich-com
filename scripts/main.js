

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


// PROJECT BG TOGGLE COLOR TRANSITION

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 180) {
      if ($('div').hasClass('bg-change')) {
        $('.bg-change').removeClass('elem-opacity--0');
        $('body').addClass('text-white');
        $('body').css('background', 'black');
        $('body').css('transition', 'all 0.5s ease');
        $('.a-menu').addClass('a-menu--white');
        $('.text-grey').addClass('text-white elem-opacity--04');
        $('.ratio-wrap').css('background', '#1A1A1A');
      }
    } else {
        $('.bg-change').addClass('elem-opacity--0');
        $('body').removeClass('text-white');
        $('body').css('background', 'white');
        $('.a-menu').removeClass('a-menu--white');
        $('.text-grey').removeClass('text-white elem-opacity--04');
    }
});


// LAZY LOAD

lazyload();
