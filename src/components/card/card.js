import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../rate/rate';
import './card.scss';
import $ from 'jquery';

class Card {
  constructor(card) {
    this.$card = card;
    this.$slides = card.find('.js-card__slide');
    this.$left = card.find('.js-card__arrow_left');
    this.$right = card.find('.js-card__arrow_right');
    this.$controls = card.find('.js-card__control');
    this.counter = 0;
    this.init();
  }
  init() {
    this.showSlides();
    this.$controls.each((j) => {
      this.$controls.eq(j).click((evt) => {
        evt.preventDefault();
        this.counter = j;
        this.showSlides();
      });
    });
    this.$left.click(() => {
      switch (this.counter) {
        case 0:
        this.counter = 3;
        break;
        default:
        this.counter -= 1;
      }
      this.showSlides();
    });
    this.$right.click(() => {
      switch (this.counter) {
        case 3:
        this.counter = 0;
        break;
        default:
        this.counter += 1;
      }
      this.showSlides();
    });
  }
  showSlides() {
    this.$slides.removeClass('js-card__slide-left');
    this.$slides.removeClass('js-card__slide-active');
    this.$slides.removeClass('js-card__slide-right');
    this.$controls.removeClass('js-card__control_active');
    switch (this.counter) {
      case 0:
      this.$slides.eq(3).addClass('js-card__slide-left');
      this.$slides.eq(0).addClass('js-card__slide-active');
      this.$slides.eq(1).addClass('js-card__slide-right');
      this.$controls.eq(0).addClass('js-card__control_active');
      break;
      case 1:
      this.$slides.eq(0).addClass('js-card__slide-left');
      this.$slides.eq(1).addClass('js-card__slide-active');
      this.$slides.eq(2).addClass('js-card__slide-right');
      this.$controls.eq(1).addClass('js-card__control_active');
      break;
      case 2:
      this.$slides.eq(1).addClass('js-card__slide-left');
      this.$slides.eq(2).addClass('js-card__slide-active');
      this.$slides.eq(3).addClass('js-card__slide-right');
      this.$controls.eq(2).addClass('js-card__control_active');
      break;
      case 3:
      this.$slides.eq(2).addClass('js-card__slide-left');
      this.$slides.eq(3).addClass('js-card__slide-active');
      this.$slides.eq(0).addClass('js-card__slide-right');
      this.$controls.eq(3).addClass('js-card__control_active');
      break;
      default:
      break;
    }
  }
}

export default Card;

