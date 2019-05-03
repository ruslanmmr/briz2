$(document).ready(function () {
  nav();
  lazy();
  tabs();
  upload();
  cover();
});
$(window).resize(function () {
  innerWidth = $('body').innerWidth();
});
var innerWidth = $('body').innerWidth();

//колбэк срабатывания wow
function afterReveal( el ) {
  el.addEventListener('animationend', function( event ) {
    lazy();
  });
}

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
    effectTime: '300',
    afterLoad: function() {
      cover();
    }
  });
}
//tabs
function tabs() {
  var $TabToggle = $('.faq-tab__head_toggle'),
      $Tab = $('.faq-tab'),
      $subTabToggle = $('.sub-tab__head'),
      $subTab = $('.sub-tab');

  $TabToggle.on('click', function() {
    $(this).parents('.faq-tab').toggleClass('faq-tab_active');
    tabState();
  })
  $subTabToggle.on('click', function() {
    $(this).parents('.sub-tab').toggleClass('sub-tab_active');
    subTabState();
  })

  function tabState() {
    $Tab.each(function() {
      if($(this).hasClass('faq-tab_active')) {
        $(this).find('.faq-tab__dropdown').slideDown();
      } else {
        $(this).find('.faq-tab__dropdown').slideUp();
        $(this).find('.sub-tab').removeClass('sub-tab_active');
        subTabState();
      }
    })
  }
  function subTabState() {
    $subTab.each(function() {
      if($(this).hasClass('sub-tab_active')) {
        $(this).find('.sub-tab__dropdown').slideDown();
      } else {
        $(this).find('.sub-tab__dropdown').slideUp();
      }
    })
  }
}

//upload
function upload() {
  $('.upload__input').on('change', function() {
    $('.upload__block').remove();
    for (var i = 0; i < this.files.length; i++) {
        var name = this.files[i].name;
        $('.upload__container').append('<div class="upload__block"><span>'+ name +'</span></div>');
    }
});
}

//image-cover-box
function cover() {
  $('.cover-box').each(function () {
    //set size
    var th = $(this).height(), //box height
      tw = $(this).width(), //box width
      im = $(this).children('img'), //image
      ih = im.height(),
      iw = im.width();
    if ((tw / th) >= (iw / ih)) {
      im.addClass('ww').removeClass('wh');
    } else {
      im.addClass('wh').removeClass('ww');
    }
  });
}
