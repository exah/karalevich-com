// Fluid video

var $allVideos = $(".fluid-video"),

$fluidEl = $(".med-block");


$allVideos.each(function() {

  $(this)
  .data('aspectRatio', this.height / this.width)
  .removeAttr('height')
  .removeAttr('width');

});

$(window).resize(function() {
  var newWidth = $fluidEl.width();

  $allVideos.each(function() {

    var $el = $(this);
    $el
      .width(newWidth)
      .height(newWidth * $el.data('aspectRatio'));

  });

  }).resize();





// List hovering

var $projectListItem = $('.project-list-item');

$projectListItem.on('mousemove', function(e){
  var $img = $(this).find('img');
  
  if ($(window).width() >= 640) {
    var coordX = event.pageX;
    var coordY = event.pageY;
    var offsetX = $(this).offset().left;
    var offsetY = $(this).offset().bottom;
  
    if (!$img.is(':visible')) {
      $img.show();
    }
  
    $img.css({
      left: coordX - offsetX+60,
      top: coordY - offsetY-150,
    });
  } else {
    if ($img.is(':visible')) {
      $img.hide();
    }
  }
    
}).on('mouseleave', function() {
  var $img = $(this).find('img');
  
  if ($img.is(':visible')) {
    $img
    .hide()
    .css({
      left: '',
      top: '',
    });
  }
});





// Slick initialization

$(document).ready(function(){
  $('.slider').slick({
    adaptiveHeight: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    focusOnSelect: true,
    dots: false,
    arrows: true,
    waitForAnimate: false,
    pauseOnHover: true,
  });
});





// Random icons

var divs = $("div.load").get().sort(function(){ 
  return Math.round(Math.random())-0.3; //random so we get the right +/- combo
}).slice(0,1)

if (divs.length > 0) {

$(divs).appendTo(divs[0].parentNode).show();
}





// Smooth scroll to second screen

function scrollNav() {
  $('.smooth').click(function(e){
    e.preventDefault();

    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 0
    }, 300);
  });
  $('.smooth').scrollTop();
}
scrollNav();





// block resize

function doResize() {
  $('.js-fluid').each(function(i, el) {
    var $fluid = $(el);
    var $parent = $fluid.parent();
    var parentHeight = $parent.height();
    var parentWidth = $parent.width();
  
  
    if (!$fluid.data('ratio')) {
      $fluid.data(
        'ratio', $fluid.width() / $fluid.height()
      );
    }
  
    var ratio = $fluid.data('ratio');

    var nextHeight = parentWidth / ratio;
    var nextWidth = parentHeight * ratio;

    if (nextWidth < parentWidth) {
      $fluid.width(nextWidth);
      $fluid.height(parentHeight);
    } else {
      $fluid.width(parentWidth);
      $fluid.height(nextHeight);
    }
  });
}

$(window).on('load resize', doResize);





// Intro is fading on scroll

$(window).scroll(function(){
    $(".intro-fade").css("opacity", 1 - $(window).scrollTop() / 1300);
  });





// Page fade out

// $(document).ready(function() {

// $('a').not('.smooth').click(function(event) {
//   event.preventDefault();
//   newLocation = this.href;
//   $('body').fadeOut(200, newpage);
// });

// function newpage() {
//   window.location = newLocation;
// }
// });