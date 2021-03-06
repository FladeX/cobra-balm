$(document).ready ->
	$menu = $('#header')
	scroll_height = 40
	item_price = 499
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
			$('body').css
				'overflow': 'hidden'
			$('.b-popup').show()
		else
			$('html, body').stop().animate
				'scrollTop': $target.offset().top
			, 900, 'swing', ->
				window.location.hash = target
	$('.b-popup__close').on 'click', ->
		$('body').css
			'overflow': 'auto'
		$('.b-popup').css
			display: 'none'
	$('.b-intro__order-button, .b-components__order-button').on 'click', ->
		$('body').css
			'overflow': 'hidden'
		$('.b-popup').show()
	$('.b-popup__number_mode_plus').on 'click', ->
		count = parseInt $('.b-popup__count').text()
		if count > 9
			text = count + 5 + ' шт.'
			price = (count + 5) * item_price
		else
			text = count + 1 + ' шт.'
			price = (count + 1) * item_price
		price = price.toLocaleString().toString().replace(/,/g, '&nbsp;');
		$('.b-popup__count').text text
		$('.b-popup__price-sum').html price
	$('.b-popup__number_mode_minus').on 'click', ->
		count = parseInt $('.b-popup__count').text()
		if count > 1
			if count > 14
				text = count - 5 + ' шт.'
				price = (count - 5) * item_price
			else
				text = count - 1 + ' шт.'
				price = (count - 1) * item_price
			price = price.toLocaleString().toString().replace(/,/g, '&nbsp;');
			$('.b-popup__count').text text
			$('.b-popup__price-sum').html price
