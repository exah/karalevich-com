// PROJECT COVER VIEWPORT ANIMATION

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + ($(window).height() + ($(elem).height() / 2));

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function () {
  $('.elem-in-viewport').each(function () {
    if (isScrolledIntoView(this) === true) {
      $(this).removeClass('elem-in-viewport')
    }
  });
});


// VIMEO AUTOPLAY IN VIEWPORT

$(window).scroll(function () {
  $('.vimeo-viewport-autoplay').each(function () {
    if (isScrolledIntoView(this) === true) {
      $(this).attr('src', $(this).attr('src') + '&autoplay=1')
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

  if ($('div').hasClass('bg-change-on-scroll')) {
    if (scroll >= 180) {
        $('body').addClass('text-white bg-black elem-transition--05');
        $('.a-menu').addClass('a-menu--white');
        $('.text-grey').addClass('text-white elem-opacity--04');
        $('.bubble').addClass('bubble-black');
        $('.tag').addClass('tag-white');
        $('.ratio-wrap').css('background', '#1A1A1A');
      } else {
      $('body').removeClass('text-white bg-black');
      $('.a-menu').removeClass('a-menu--white');
      $('.text-grey').removeClass('text-white elem-opacity--04');
      $('.bubble').removeClass('bubble-black');
      $('.tag').removeClass('tag-white');
    }
  }
});


// BLACK BG FROM START

if ($('body').hasClass('bg-black-from-start')) {
  $('body').addClass('text-white bg-black');
  $('.a-menu').addClass('a-menu--white ');
  $('.text-grey').addClass('text-white elem-opacity--04');
  $('.bubble').addClass('bubble-black');
  $('.ratio-wrap').css('background', '#1A1A1A');
};


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

// FIXED MENU FROM START ON PROJECTS

if ($('body').hasClass('elem-from-left')) {
  $('#menu-on-scroll').removeClass('menu-is-hidden elem-transition--02')
};



// MENU BUTTON ON CLICK REVEALS MENU

$('#open-menu').click(function() {
  $(this).css('z-index', 'auto');
  $('#menu-button').addClass('clicked').removeClass('size center');
  $('.menu-dot').addClass('clicked');
  $('#menu-list').css('display', 'block');
  $('.page').addClass('elem-transition--05 menu-button-effect');
})

$('.menu-dot').click(function() {
  $('#open-menu').css('z-index', '1');
  $('#menu-button').removeClass('clicked').addClass('size center');
  $('.menu-dot').removeClass('clicked');
  $('#menu-list').css('display', 'none');
  $('.page').removeClass('menu-button-effect');
})


// MENU CLOSES IF PAGE SCROLLED

$(window).scroll(function() {
  $('#open-menu').css('z-index', '1');
  $('#menu-button').removeClass('clicked').addClass('size center');
  $('.menu-dot').removeClass('clicked');
  $('#menu-list').css('display', 'none');
  $('.page').removeClass('menu-button-effect');
});


// INTRO ANIMATION

$(window).scroll(function(){
  $(".intro").css("opacity", 1 - $(window).scrollTop() / 400);
});


// RANDOM SIGNATURE: OFF

// myArray = $('.signature');
// var rand = myArray[Math.floor(Math.random() * myArray.length)];
// $(rand).removeClass('elem-is-hidden');



// TOGGLE PROJECT FOOTER

$('.footer-button').click(function() {
  if($('.project-footer').hasClass('elem-is-hidden')) {
    $('.project-footer').removeClass('elem-is-hidden');
    $('.button-toggle').html('–');
  } else {
    $('.project-footer').addClass('elem-is-hidden')
    $('.button-toggle').html('+');
  }
})



// LAZY LOAD

lazyload();