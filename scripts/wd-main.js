$(document).ready(function() {

  // Click on Invitation

  $('.wd__open--button').click(function() {
    $('#wd__info').show();
    $('#wd__open').hide();
  })

  // Menu switcher

  $('#wd__guests, #wd__where, #wd__timing, #wd__lookbook').click(function() {
    $(this).siblings().removeClass('wd__menu-item--active');
    $(this).addClass('wd__menu-item--active');
  })

  $('#wd__heart').click(function() {
    $('#wd__guests, #wd__where, #wd__timing, #wd__lookbook').removeClass('wd__menu-item--active');
  })

  // Content revealing

  $('#wd__guests').click(function() {
    $('#wd__guests-screen').siblings().addClass('wd__display--none');
    $('#wd__guests-screen').removeClass('wd__display--none')
    })

  $('#wd__where').click(function() {
    $('#wd__where-screen').siblings().addClass('wd__display--none');
    $('#wd__where-screen').removeClass('wd__display--none')
    })

  $('#wd__lookbook').click(function() {
    $('#wd__lookbook-screen').siblings().addClass('wd__display--none');
    $('#wd__lookbook-screen').removeClass('wd__display--none')
    })

  $('#wd__heart').click(function() {
    $('#wd__message-screen').siblings().addClass('wd__display--none');
    $('#wd__message-screen').removeClass('wd__display--none')
    })

})