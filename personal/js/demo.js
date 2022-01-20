window.onload = function() {
    $(window).on('scroll', function() {
      let scrollTop = $(window).scrollTop();
      let windowHeight = $(window).height();
      if(scrollTop > windowHeight * 0.20) {
          $('div#backToTop').show(500);
      } else {
          $('div#backToTop').hide(300);
      }
  });

  $('div#backToTop').on('click', function() {
     $('html, body').animate({'scrollTop': 0}, 300);
  });
};