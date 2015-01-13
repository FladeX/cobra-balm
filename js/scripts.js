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
    return $('a[href^="#"]').on('click', function(e) {
      var $target, target;
      e.preventDefault();
      target = this.hash;
      $target = $(target);
      return $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 900, 'swing', function() {
        return window.location.hash = target;
      });
    });
  });

}).call(this);
