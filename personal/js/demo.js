var oldScrollTop = 0;
var slideShowCounter = 2;
var zIndexCounter = -1;
window.onload = function() {
      setInterval(function() {
        $('div').eq(slideShowCounter).animate({'left': '-50px'}, 500, function(){
             $(this).css({'z-index': zIndexCounter, 'left': 0});
            if(slideShowCounter - 1 < 0) {
                 slideShowCounter = 2;
            }else {
                 slideShowCounter -= 1;
            }
            $('div').eq(slideShowCounter).css({'z-index': 999});
            zIndexCounter--;
        });
    }, 2000);

    $(window).on('scroll', function() {
      let scrollTop = $(window).scrollTop();
      let windowHeight = $(window).height();
      if(scrollTop > windowHeight * 0.20) {
          $('div#backToTop').show(500);
      } else {
          $('div#backToTop').hide(300);
      }

      let currentBgTop = $('img#bg').css('top');
      currentBgTop = Number(currentBgTop.replace('px', ''));
      if(scrollTop - oldScrollTop > 0) {
         $('img#bg').css({'top': currentBgTop - 1 + 'px'});
      } else {
         $('img#bg').css({'top': currentBgTop + 1 + 'px'});
      }
      oldScrollTop = scrollTop;
  });

  $('div#backToTop').on('click', function() {
     $('html, body').animate({'scrollTop': 0}, 300);
  });
};