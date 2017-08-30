var $list = $('.paragraphs');

$list.on('click', 'p:first-child', function() {
  var reversedItems = $list.children('.phrase').get().reverse();
  $list.empty().append(reversedItems);
})


// PROJECT COVER VIEWPORT ANIMATION

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + ($(window).height() + 460);

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


// PROJECT COVER HOVER

$('.project').hover(function() {
    $(this).find('img, video').addClass('project-hover');
    $(this).find('.project-desc').addClass('opacity');
}, function() {
    $(this).find('img, video').removeClass('project-hover');
    $('.project-desc').removeClass('opacity');
});

// $('.target').hover(function() {
//     $('body').css('background-color', '#262626');
// }, function() {
//     $('body').css('background-color', '#fff');
// });


// INTRO ANIMATION

$(window).scroll(function(){
  $(".p-intro").css("opacity", 1 - $(window).scrollTop() / 400);
  // $(".bg-black").css("opacity", 1 - $(window).scrollTop() / 400);
  // $(".p-intro").css("top", 100 - $(window).scrollTop() / 2);
});


// LAZY LOAD

lazyload();
