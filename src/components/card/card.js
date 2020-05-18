import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../rate/rate';
import '../data/data';
import './card.scss';
import $ from 'jquery';

$('.card').each((i) => {
  let counter = 0;
  const $slides = $('.card').eq(i).find('.card__slide');
  const $left = $('.card').eq(i).find('.card__arrow_left');
  const $right = $('.card').eq(i).find('.card__arrow_right');
  const $controls = $('.card').eq(i).find('.card__control');
  const showSlides = function () {
    $slides.removeClass('card__slide-left');
    $slides.removeClass('card__slide-active');
    $slides.removeClass('card__slide-right');
    $controls.removeClass('card__control_active');
    switch (counter) {
      case 0:
        $slides.eq(3).addClass('card__slide-left');
        $slides.eq(0).addClass('card__slide-active');
        $slides.eq(1).addClass('card__slide-right');
        $controls.eq(0).addClass('card__control_active');
        break;
      case 1:
        $slides.eq(0).addClass('card__slide-left');
        $slides.eq(1).addClass('card__slide-active');
        $slides.eq(2).addClass('card__slide-right');
        $controls.eq(1).addClass('card__control_active');
        break;
      case 2:
        $slides.eq(1).addClass('card__slide-left');
        $slides.eq(2).addClass('card__slide-active');
        $slides.eq(3).addClass('card__slide-right');
        $controls.eq(2).addClass('card__control_active');
        break;
      case 3:
        $slides.eq(2).addClass('card__slide-left');
        $slides.eq(3).addClass('card__slide-active');
        $slides.eq(0).addClass('card__slide-right');
        $controls.eq(3).addClass('card__control_active');
        break;
      default:
        break;
    }
  };
  showSlides();
  $controls.each((j) => {
    $controls.eq(j).click((evt) => {
      evt.preventDefault();
      counter = j;
      showSlides();
    });
  });
  $left.click(() => {
    switch (counter) {
      case 0:
        counter = 3;
        break;
      default:
        counter -= 1;
    }
    showSlides();
  });
  $right.click(() => {
    switch (counter) {
      case 3:
        counter = 0;
        break;
      default:
        counter += 1;
    }
    showSlides();
  });
});
