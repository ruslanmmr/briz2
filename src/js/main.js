window.addEventListener('load', 
    function() {
      //выполнение после полной загрузки страницы
      mainAnim();
  }, false);

function mainAnim() {
  var timerDelay = 300,
      animated = 'animated',
      navLink = $('.nav__item'),
      elseEl = $('.block');
  
  function navFade() {
    navLink.each(function(i){
      var $this = $(this);
      setTimeout(function(){ 
        $this.addClass(animated);
      },i*150);
    });
  }
  function finalEvent() {
    elseEl.addClass(animated);
    new WOW({ callback: afterReveal }).init();
  };
  
  $('.home__scene, .mobile-button').addClass(animated);
  setTimeout(function() {
    $('.logo').addClass(animated);
    //init parralax
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, {
      limitY: '0',
      limitX: '40'
    });
    setTimeout(function() {
      $('.home__title').addClass(animated);
      $('.home__image_wooman, .home__image_man').addClass(animated);
      setTimeout(function() {
        $('.home__button').addClass(animated);
        $('.home__image_left, .home__image_right').addClass(animated);
        setTimeout(function() {
          $('.home__icon').addClass(animated);
          setTimeout(function() {
            navFade();
            finalEvent();
          }, timerDelay);
        }, timerDelay);
      }, timerDelay);
    }, timerDelay);
  }, 600)
}