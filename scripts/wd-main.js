$(document).ready(function() {

  $('.wd__open--button').click(function() {
    $('#wd__intro').show();
    $('#wd__info').show();
    $('#wd__open').hide();
  })

  // menu switcher

  $('#wd__guests, #wd__where, #wd__timing, #wd__lookbook').click(function() {
    $(this).siblings().removeClass('wd__menu-item--active');
    $(this).addClass('wd__menu-item--active');
  })

  // content revealing

  $('#wd__guests').click(function() {
    $('.wd__guests').siblings().hide();
    $('.wd__guests').show();
    $('#wd__info').css({
      'background': ('#FFF3F3')
    })
  })

  $('#wd__where').click(function() {
    $('.wd__where').siblings().hide();
    $('.wd__where').show();
    $('#wd__info').css({
      'background': ('#F7FFF5')
    })
  })

  $('#wd__timing').click(function() {
    $('.wd__timing').siblings().hide();
    $('.wd__timing').show();
    $('#wd__info').css({
      'background': ('#F8FFFE')
    })
  })

  $('#wd__lookbook').click(function() {
    $('.wd__lookbook').siblings().hide();
    $('.wd__lookbook').show();
    $('#wd__info').css({
      'background': ('#FFFEE6')
    })
  })

  // Scroll to Info

  $('#wd__intro').click(function() {
    $('html, body').animate({
      scrollTop: $('#wd__info').offset().top
    }, 600);
  })

  $(function() {
    $('.wd__envelope').draggable();
  })

  // Fade out Intro

  $(window).scroll(function() {

    var scrollTop = $(window).scrollTop();
    var height = ( $(window).height() - 100);

    $('#wd__intro').css({
        'opacity': ((height - scrollTop) / height)
    });
  });

  // Fixed menu

  $(window).scroll(function() {

    var scrollTop = $(window).scrollTop();
    var menuHeight = $(window).height();

    if (scrollTop > menuHeight) {
      $('.wd__menu').addClass('wd__menu--fixed');
    } else {
      $('.wd__menu').removeClass('wd__menu--fixed');
    }
  })

})