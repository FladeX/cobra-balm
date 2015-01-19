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
      var $target, target;
      e.preventDefault();
      target = this.hash;
      $target = $(target);
      if (target === '#order') {
        $('body').css({
          'overflow': 'hidden'
        });
        return $('.b-popup').show();
      } else {
        return $('html, body').stop().animate({
          'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
          return window.location.hash = target;
        });
      }
    });
    $('.b-popup__close').on('click', function() {
      $('body').css({
        'overflow': 'auto'
      });
      return $('.b-popup').css({
        display: 'none'
      });
    });
    $('.b-intro__order-button, .b-components__order-button').on('click', function() {
      $('body').css({
        'overflow': 'hidden'
      });
      return $('.b-popup').show();
    });
    $('.b-popup__number_mode_plus').on('click', function() {
      var count, text;
      count = parseInt($('.b-popup__count').text());
      if (count > 9) {
        text = count + 5 + ' шт.';
      } else {
        text = count + 1 + ' шт.';
      }
      return $('.b-popup__count').text(text);
    });
    return $('.b-popup__number_mode_minus').on('click', function() {
      var count, text;
      count = parseInt($('.b-popup__count').text());
      if (count > 1) {
        if (count > 14) {
          text = count - 5 + ' шт.';
        } else {
          text = count - 1 + ' шт.';
        }
        return $('.b-popup__count').text(text);
      }
    });
  });

}).call(this);
