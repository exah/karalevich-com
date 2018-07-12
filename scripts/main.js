// PROJECT COVER VIEWPORT ANIMATION

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop()
  var docViewBottom = docViewTop + ($(window).height() + (($(elem).height() * 90) / 100))

  var elemTop = $(elem).offset().top
  var elemBottom = elemTop + $(elem).height()

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop))
}

$(window).scroll(function () {
  $('.elem-in-viewport').each(function () {
    if (isScrolledIntoView(this) === true) {
      $(this).removeClass('elem-in-viewport')
    }
  });
});


// PROJECT COVER HOVER ON INDEX

$('.project').hover(function() {
  $(this).find('img, video').addClass('project-hover')
  $(this).find('.project-desc').addClass('elem-opacity--1')
}, function() {
    $(this).find('img, video').removeClass('project-hover')
    $('.project-desc').removeClass('elem-opacity--1')
})


// WHITE TO BLACK BG TRANSITION

$(window).scroll(function() {
  var scroll = $(window).scrollTop()

  if ($('div').hasClass('bg-change-on-scroll')) {
    if (scroll >= 180) {
        $('body').addClass('text-white bg-black elem-transition--05')
        $('.a-menu').addClass('a-menu--white')
        $('.text-grey').addClass('text-white elem-opacity--04')
        $('.bubble').addClass('bubble-black')
        $('.tag').addClass('bubble-black')
        $('.credits-button').addClass('bubble-black')
        $('.ratio-wrap').css('background', '#1A1A1A')
      } else {
      $('body').removeClass('text-white bg-black')
      $('.a-menu').removeClass('a-menu--white')
      $('.text-grey').removeClass('text-white elem-opacity--04')
      $('.bubble').removeClass('bubble-black')
      $('.tag').removeClass('bubble-black')
      $('.credits-button').removeClass('bubble-black')
    }
  }
})


// FIXED MENU REVEAL ON SCROLL

$(window).scroll(function() {
    var scroll = $(window).scrollTop()

    if (scroll >= 200) {
      $('#menu-on-scroll').removeClass('menu-is-hidden')
    } else {
        $('#menu-on-scroll').addClass('menu-is-hidden')
        $('#menu-button').removeClass('clicked').addClass('size center')
        $('.menu-dot').removeClass('clicked')
        $('#menu-list').css('display', 'none')
    }
});

// FIXED MENU FROM START ON PROJECTS

if ($('body').hasClass('elem-from-left')) {
  $('#menu-on-scroll').removeClass('menu-is-hidden elem-transition--02')
};



// MENU BUTTON ON CLICK REVEALS MENU

$('#open-menu').click(function() {
  $(this).css('z-index', 'auto')
  $('#menu-button').addClass('clicked').removeClass('size center')
  $('.menu-dot').addClass('clicked')
  $('#menu-list').css('display', 'block')
  $('.page').addClass('elem-transition--05 menu-button-effect')
})

$('.menu-dot').click(function() {
  $('#open-menu').css('z-index', '1')
  $('#menu-button').removeClass('clicked').addClass('size center')
  $('.menu-dot').removeClass('clicked')
  $('#menu-list').css('display', 'none')
  $('.page').removeClass('menu-button-effect')
})


// MENU CLOSES IF PAGE IS SCROLLED

$(window).scroll(function() {
  $('#open-menu').css('z-index', '1')
  $('#menu-button').removeClass('clicked').addClass('size center')
  $('.menu-dot').removeClass('clicked')
  $('#menu-list').css('display', 'none')
  $('.page').removeClass('menu-button-effect')
})


// MENU CLOSES ON CLICK OUTSIDE

$('#open-menu').on('focusout', function () {
  $('#open-menu').css('z-index', '1')
  $('#menu-button').removeClass('clicked').addClass('size center')
  $('.menu-dot').removeClass('clicked')
  $('#menu-list').css('display', 'none')
  $('.page').removeClass('menu-button-effect')
})


// INTRO ANIMATION

$(window).scroll(function(){
  $(".intro").css("opacity", 1 - $(window).scrollTop() / 400)
});


// RANDOM SIGNATURE: OFF

// myArray = $('.signature')
// var rand = myArray[Math.floor(Math.random() * myArray.length)]
// $(rand).removeClass('elem-is-hidden')



// TOGGLE PROJECT FOOTER

$('.credits-block').click(function() {
  if($('.credits-content').hasClass('elem-is-hidden')) {
    $('.credits-button').addClass('elem-is-hidden')
    $('.credits-block').addClass('elem-padding-0 elem-no-border')
    $('.credits-content').removeClass('elem-is-hidden')
  }
})



// TWO-IMAGE SLIDESOW ANIMATION

setInterval(function() {
  $('.elem-show-hide-loop').toggleClass('elem-opacity--1')
}, 3000)



// BLURB

$('#blurb').click(function() {
  if ($(this).hasClass('bubble-blurb')) {
    $(this).removeClass('bubble-blurb')
      .addClass('bubble-blurb--clicked text-small bubble-blurb--scaled')
    $('.blurb-bg').toggleClass('blurb-bg-mobile elem-transition--05')
    $('.blurb-p').toggleClass('margin-t-1x blurb-p-margin')
    $('.blurb-wrapper').toggleClass('blurb-wrapper--v-center')
  } else if ($(this).hasClass('bubble-blurb--clicked')) {
    $(this).removeClass('bubble-blurb--clicked bubble-blurb--scaled').addClass('bubble-blurb')
    $('.blurb-bg').toggleClass('blurb-bg-mobile elem-transition--05')
    $('.blurb-p').toggleClass('margin-t-1x blurb-p-margin')
    $('.blurb-wrapper').toggleClass('blurb-wrapper--v-center')
  }
})



// LAZYLOAD.JS

var myLazyLoad = new LazyLoad({
    elements_selector: ".lazy"
});