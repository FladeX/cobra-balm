(function() {
  $(document).ready(function() {
    var $menu, scroll_height;
    $menu = $('#header');
    scroll_height = 40;
    $(window).scroll(function() {
      if ($(this).scrollTop() > scroll_height) {
        return $menu.addClass('b-header_mode_fixed');
      } else if ($(this).scrollTop() <= scroll_height && $menu.hasClass('b-header_mode_fixed')) {
        return $menu.removeClass('b-header_mode_fixed');
      }
    });
    $('a[href^="#"]').on('click', function(e) {
      var $target, offsetTop, target;
      e.preventDefault();
      target = this.hash;
      $target = $(target);
      if (target === '#order') {
        offsetTop = $(window).scrollTop();
        $('html, body').css({
          'height': '100%',
          'overflow': 'hidden'
        }).scrollTop(offsetTop);
        $('.b-popup').show();
      }
      return $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 900, 'swing', function() {
        return window.location.hash = target;
      });
    });
    $('.b-popup__close').on('click', function() {
      $('html, body').css({
        'height': 'auto',
        'overflow': 'auto'
      });
      return $('.b-popup').css({
        display: 'none'
      });
    });
    return $('.b-intro__order-button, .b-components__order-button').on('click', function() {
      var offsetTop;
      offsetTop = $(window).scrollTop();
      $('html, body').css({
        'height': '100%',
        'overflow': 'hidden'
      }).scrollTop(offsetTop);
      return $('.b-popup').show();
    });
  });

}).call(this);
