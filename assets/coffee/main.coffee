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

		if target == '#order'
			offsetTop = $(window).scrollTop()
			$('html, body').css
				'height': '100%'
				'overflow': 'hidden'
			.scrollTop(offsetTop)
			$('.b-popup').show()
		$('html, body').stop().animate
			'scrollTop': $target.offset().top
		, 900, 'swing', ->
			window.location.hash = target
	$('.b-popup__close').on 'click', ->
		$('html, body').css
			'height': 'auto'
			'overflow': 'auto'
		$('.b-popup').css
			display: 'none'
	$('.b-intro__order-button, .b-components__order-button').on 'click', ->
		offsetTop = $(window).scrollTop()
		$('html, body').css
			'height': '100%'
			'overflow': 'hidden'
		.scrollTop(offsetTop)
		$('.b-popup').show()
