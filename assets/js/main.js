(function() {
  $(document).ready(function() {
    var $menu;
    $menu = $('#header');
    return $(window).scroll(function() {
      if ($(this).scrollTop() > 60) {
        return $menu.addClass('b-header_mode_fixed');
      } else if ($(this).scrollTop() <= 60 && $menu.hasClass('b-header_mode_fixed')) {
        return $menu.removeClass('b-header_mode_fixed');
      }
    });
  });

}).call(this);
