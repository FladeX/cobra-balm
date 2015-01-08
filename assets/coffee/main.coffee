$(document).ready ->
	$menu = $('#header')
	$(window).scroll ->
		if $(this).scrollTop() > 60
			$menu.addClass('b-header_mode_fixed')
		else if $(this).scrollTop() <= 60 and $menu.hasClass('b-header_mode_fixed')
			$menu.removeClass('b-header_mode_fixed')
