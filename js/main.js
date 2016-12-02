$(document).ready(function() {
  $(window).scroll(function(e){
    parallax();
  });
  function parallax(){
    var scrolled = $(window).scrollTop();
    $('.nv-bg').css('top',-(scrolled*0.2)+'px');
  }

   $('.bx-slider').bxSlider({
     controls: true,
     auto: true,
     video: true,
     autoStart: true,
     adaptiveHeight: true,
     nextText: '<img src="images/arrow-n.png" width="14"/>',
     prevText: '<img src="images/arrow-p.png" width="14"/>'
   });

   $('.quotes-slider').bxSlider({
     mode: 'vertical',
     controls: false,
     auto: true,
     pager: false,
     speed: 250,
     pause: 10000,
     randomStart: true,
     autoStart: true,
     adaptiveHeight: false
   });
});
