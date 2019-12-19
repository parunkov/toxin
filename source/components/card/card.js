import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../components/rate/rate.js';
import '../../components/data/data.js';
import './card.scss';

$('.card__container').each(function(i) {
	let counter = 0;
	let $slides = $('.card__container').eq(i).find('.card__slide');
	let left = $('.card__container').eq(i).find('.card__arrow-left');
	let right = $('.card__container').eq(i).find('.card__arrow-right');
	let $controls = $('.card__container').eq(i).find('.card__control');
	let showSlides = function() {
		$slides.removeClass('card__slide-left');
		$slides.removeClass('card__slide-active');
		$slides.removeClass('card__slide-right');
		$controls.removeClass('card__control--active');
		switch (counter) {
			case 0:
				$slides.eq(3).addClass('card__slide-left');
				$slides.eq(0).addClass('card__slide-active');
				$slides.eq(1).addClass('card__slide-right');
				$controls.eq(0).addClass('card__control--active');
				break;
			case 1:
				$slides.eq(0).addClass('card__slide-left');
				$slides.eq(1).addClass('card__slide-active');
				$slides.eq(2).addClass('card__slide-right');
				$controls.eq(1).addClass('card__control--active');
				break;
			case 2:
				$slides.eq(1).addClass('card__slide-left');
				$slides.eq(2).addClass('card__slide-active');
				$slides.eq(3).addClass('card__slide-right');
				$controls.eq(2).addClass('card__control--active');
				break;
			case 3:
				$slides.eq(2).addClass('card__slide-left');
				$slides.eq(3).addClass('card__slide-active');
				$slides.eq(0).addClass('card__slide-right');
				$controls.eq(3).addClass('card__control--active');
				break;
		}
	}
	showSlides();
	$controls.each(function(i) {
		$controls.eq(i).click(function(evt) {
			evt.preventDefault();
			counter = i;
			showSlides();
		});
	});
	left.click(function() {
		switch (counter) {
			case 0:
				counter = 3;
				break;
			default:
				counter--;
		}
		showSlides();
	});
	right.click(function() {
		switch (counter) {
			case 3:
				counter = 0;
				break;
			default:
				counter++;
		}
		showSlides();
	});
});