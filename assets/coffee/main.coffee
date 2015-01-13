$(document).ready ->
	$menu = $('#header')
	scroll_height = 40
	$(window).scroll ->
		if $(this).scrollTop() > scroll_height
			$menu.addClass('b-header_mode_fixed')
		else if $(this).scrollTop() <= scroll_height and $menu.hasClass('b-header_mode_fixed')
			$menu.removeClass('b-header_mode_fixed')
	$('a[href^="#"]').on 'click', (e) ->
		e.preventDefault()

		target = this.hash
		$target = $(target)

		$('html, body').stop().animate
			'scrollTop': $target.offset().top
		, 900, 'swing', ->
			window.location.hash = target
