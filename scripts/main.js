$(window).on('load', function() {





  // Hides all until loaded

  $(document).ready(function () {
    $('#page').removeClass('hidden');
    $('#loader').addClass('hidden');
  });





  // Fluid video

  var $allVideos = $('.fluid-video'),

  $fluidEl = $('.slider');


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
        left: coordX - offsetX+200,
        top: coordY - offsetY-1200,
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
      lazyLoad: 'ondemand',
      adaptiveHeight: true,
      speed: 350,
      fade: true,
      focusOnSelect: true,
      dots: false,
      arrows: true,
      waitForAnimate: false,
      pauseOnHover: true,
    });
  });





  // Block resize with ratio

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





  // Smooth scroll to project screen

  $('.slick-arrow').click(function() {
      $('html,body').animate({
          scrollTop: $(this).closest('.wrapper-screen').offset().top},
          'slow');
  });





  // Open/close popup 'about' & 'list'

  $('.open-about').click(function() {
        $('#about').removeClass('hidden');
    });

  $('.open-list').click(function() {
        $('#list').removeClass('hidden');
    });

  $('.close-popup,.project-list-link').click(function() {
    $('.popup').addClass('hidden');
  });





  // Scroll to top

  $('.project-list-link,.scroll-top').click(function() {

      $('html,body').animate ({
      scrollTop: $($(this).attr('href')).offset().top}, 'slow');
  });





  // ScrollReveal

  ScrollReveal().reveal('.reveal', {
    reset: true,
    scale: 0,
    distance: 0
  });



  

  // Keyboard navigation

  var togglePopup = function($el) {
    if ($el.hasClass('hidden')) {
        $el.removeClass('hidden');
      } else {
        $el.addClass('hidden');
      }
  }

  $(document).on('keyup',function(evt) { // close popup

    switch(evt.keyCode) {
      case 65: // A
        return togglePopup($('#about'))
      case 76: // L
        return togglePopup($('#list'))
    }

  });

  $(document).on('keyup',function(evt) { // close popup with Esc
    if (evt.keyCode == 27) {
       $('#about, #list').addClass('hidden');
    }
  });





  // Random end text

  var divs = $('.random').get().sort(function() {
  return 0.5 - Math.random();
  }).slice(0,1)

  if (divs.length > 0) {
    $(divs).appendTo(divs[0].parentNode).show();
  }





  // Post count

  var totalPosts = $('.wrapper-screen').length;
    $('span.post-count').html(totalPosts);




});