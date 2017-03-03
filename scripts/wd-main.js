$(document).ready(function() {

  $('.wd-open--button').click(function() {
    $('#wd-intro').show();
    $('#wd-info').show();
    $('#wd-open').hide();
  })

  // menu switcher

  $('#wd-guests, #wd-where, #wd-timing, #wd-lookbook').click(function() {
    $(this).siblings().removeClass('wd-menu-item--active');
    $(this).addClass('wd-menu-item--active');
  })

  // content revealing

  $('#wd-guests').click(function() {
    $('.wd-guests').siblings().hide();
    $('.wd-guests').show();
    $('#wd-info').css({
      'background': ('#FFF3F3')
    })
  })

  $('#wd-where').click(function() {
    $('.wd-where').siblings().hide();
    $('.wd-where').show();
    $('#wd-info').css({
      'background': ('#F7FFF5')
    })
  })

  $('#wd-timing').click(function() {
    $('.wd-timing').siblings().hide();
    $('.wd-timing').show();
    $('#wd-info').css({
      'background': ('#F8FFFE')
    })
  })

  $('#wd-lookbook').click(function() {
    $('.wd-lookbook').siblings().hide();
    $('.wd-lookbook').show();
    $('#wd-info').css({
      'background': ('#FFFEE6')
    })
  })

  // Scroll to Info

  $('#wd-intro').click(function() {
    $('html, body').animate({
      scrollTop: $('#wd-info').offset().top
    }, 600);
  })

  $(function() {
    $('.wd-envelope').draggable();
  })

  // Fade out Intro

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = ( $(window).height() - 100);
    $('.wd-intro--bg').css({
        'opacity': ((height - scrollTop) / height)
    });
});

})