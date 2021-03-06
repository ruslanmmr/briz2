window.addEventListener('load', 
    function() {
      //выполнение после полной загрузки страницы
      secondaryAnim();
  }, false);

function secondaryAnim() {
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
  if(innerWidth>992) {
    $('.mobile-button').addClass(animated);
    $('.logo').addClass(animated);
    setTimeout(function() {
      navFade();
      setTimeout(function() {
        finalEvent();
      }, 600);
    }, timerDelay)
  } else {
    $('.mobile-button').addClass(animated);
    $('.logo').addClass(animated);
    setTimeout(function() {
      navFade();
      finalEvent();
    }, timerDelay)
  }
}