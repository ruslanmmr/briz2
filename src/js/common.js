$(document).ready(function () {
  nav();
  new WOW().init();
  lazy();
});
$(window).resize(function () {
  innerWidth = $('body').innerWidth();
});
var innerWidth = $('body').innerWidth();

function nav() {
  var navButton = $('.mobile-button, .overlay'),
    nav = $('.nav'),
    navLink = $('.nav__link'),
    overlay = $('.overlay');

  navButton.click(function (event) {
    event.preventDefault();
    nav.toggleClass('nav_active');
    navState();
  })
  
  function navState() {
    if (nav.hasClass('nav_active')) {
      navButton.addClass('mobile-button_active');
      overlay.fadeIn(300);
      scrollLock.hide($("body"));
      $('body').addClass('body_fixed');
    } else {
      navButton.removeClass('mobile-button_active');
      overlay.fadeOut(300);
      scrollLock.show($("body"));
      $('body').removeClass('body_fixed');
    }
  }
  $(window).resize(function () {
    if (innerWidth > 992) {
      nav.removeClass('nav_active');
      navState();
    }
  });
  
  navLink.on('click', function () {
    if(innerWidth < 992) {
      nav.removeClass('nav_active');
      navState();
    }
  })
}
//lazy
function lazy() {
  $(".lazy").Lazy({
    visibleOnly: true,
    threshold: '',
    effect: 'fadeIn',
    effectTime: '300'
  });
}