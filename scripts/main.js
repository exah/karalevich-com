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


// WHITE TO BLACK BG TRANSITION

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 180) {
      if ($('div').hasClass('bg-change-on-scroll')) {
        $('body').addClass('text-white bg-black elem-transition--05');
        $('.a-menu').addClass('a-menu--white');
        $('.text-grey').addClass('text-white elem-opacity--04');
        $('.bubble').addClass('bubble-black');
        $('.ratio-wrap').css('background', '#1A1A1A');
      }
    } else {
      $('body').removeClass('text-white bg-black');
      $('.a-menu').removeClass('a-menu--white');
      $('.text-grey').removeClass('text-white elem-opacity--04');
      $('.bubble').removeClass('bubble-black');
    }
});


// FIXED MENU REVEAL ON SCROLL

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
      $('#menu-on-scroll').removeClass('menu-is-hidden')
    } else {
        $('#menu-on-scroll').addClass('menu-is-hidden')
        $('#menu-button').removeClass('clicked').addClass('size center');
        $('.menu-dot').removeClass('clicked');
        $('#menu-list').css('display', 'none');
    }
});



// MENU BUTTON ON CLICK REVEALS MENU

$('#open-menu').click(function() {
  $(this).css('z-index', 'auto');
  $('#menu-button').addClass('clicked').removeClass('size center');
  $('.menu-dot').addClass('clicked');
  $('#menu-list').css('display', 'block');
  $('.page').css('transform', 'scale(.990)').addClass('elem-transition--05');
  $('.page').css('opacity', '.9');
})

$('.menu-dot').click(function() {
  $('#open-menu').css('z-index', '1');
  $('#menu-button').removeClass('clicked').addClass('size center');
  $('.menu-dot').removeClass('clicked');
  $('#menu-list').css('display', 'none');
  $('.page').css('transform', 'inherit');
  $('.page').css('opacity', 'inherit');
})


// MENU CLOSES IF PAGE CROLLED

$(window).scroll(function() {
  $('#open-menu').css('z-index', '1');
  $('#menu-button').removeClass('clicked').addClass('size center');
  $('.menu-dot').removeClass('clicked');
  $('#menu-list').css('display', 'none');
});


// INTRO ANIMATION

$(window).scroll(function(){
  $(".p-intro").css("opacity", 1 - $(window).scrollTop() / 400);
});


// LAZY LOAD

lazyload();
