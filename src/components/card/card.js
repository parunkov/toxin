import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../rate/rate';
import './card.scss';
import $ from 'jquery';

class Card {
  constructor(card) {
    this.$card = card;
    this.$slides = card.find('.card__slide');
    this.$left = card.find('.card__arrow_left');
    this.$right = card.find('.card__arrow_right');
    this.$controls = card.find('.card__control');
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
    this.$slides.removeClass('card__slide-left');
    this.$slides.removeClass('card__slide-active');
    this.$slides.removeClass('card__slide-right');
    this.$controls.removeClass('card__control_active');
    switch (this.counter) {
      case 0:
      this.$slides.eq(3).addClass('card__slide-left');
      this.$slides.eq(0).addClass('card__slide-active');
      this.$slides.eq(1).addClass('card__slide-right');
      this.$controls.eq(0).addClass('card__control_active');
      break;
      case 1:
      this.$slides.eq(0).addClass('card__slide-left');
      this.$slides.eq(1).addClass('card__slide-active');
      this.$slides.eq(2).addClass('card__slide-right');
      this.$controls.eq(1).addClass('card__control_active');
      break;
      case 2:
      this.$slides.eq(1).addClass('card__slide-left');
      this.$slides.eq(2).addClass('card__slide-active');
      this.$slides.eq(3).addClass('card__slide-right');
      this.$controls.eq(2).addClass('card__control_active');
      break;
      case 3:
      this.$slides.eq(2).addClass('card__slide-left');
      this.$slides.eq(3).addClass('card__slide-active');
      this.$slides.eq(0).addClass('card__slide-right');
      this.$controls.eq(3).addClass('card__control_active');
      break;
      default:
      break;
    }
  }
}

// const cards = [];
// $('.card').each((i) => {
//   cards[i] = new Card($('.card').eq(i));
// });

export default Card;





// $('.card').each((i) => {
//   let counter = 0;
//   const $slides = $('.card').eq(i).find('.card__slide');
//   const $left = $('.card').eq(i).find('.card__arrow_left');
//   const $right = $('.card').eq(i).find('.card__arrow_right');
//   const $controls = $('.card').eq(i).find('.card__control');
//   const showSlides = function () {
//     $slides.removeClass('card__slide-left');
//     $slides.removeClass('card__slide-active');
//     $slides.removeClass('card__slide-right');
//     $controls.removeClass('card__control_active');
//     switch (counter) {
//       case 0:
//         $slides.eq(3).addClass('card__slide-left');
//         $slides.eq(0).addClass('card__slide-active');
//         $slides.eq(1).addClass('card__slide-right');
//         $controls.eq(0).addClass('card__control_active');
//         break;
//       case 1:
//         $slides.eq(0).addClass('card__slide-left');
//         $slides.eq(1).addClass('card__slide-active');
//         $slides.eq(2).addClass('card__slide-right');
//         $controls.eq(1).addClass('card__control_active');
//         break;
//       case 2:
//         $slides.eq(1).addClass('card__slide-left');
//         $slides.eq(2).addClass('card__slide-active');
//         $slides.eq(3).addClass('card__slide-right');
//         $controls.eq(2).addClass('card__control_active');
//         break;
//       case 3:
//         $slides.eq(2).addClass('card__slide-left');
//         $slides.eq(3).addClass('card__slide-active');
//         $slides.eq(0).addClass('card__slide-right');
//         $controls.eq(3).addClass('card__control_active');
//         break;
//       default:
//         break;
//     }
//   };
//   showSlides();
//   $controls.each((j) => {
//     $controls.eq(j).click((evt) => {
//       evt.preventDefault();
//       counter = j;
//       showSlides();
//     });
//   });
//   $left.click(() => {
//     switch (counter) {
//       case 0:
//         counter = 3;
//         break;
//       default:
//         counter -= 1;
//     }
//     showSlides();
//   });
//   $right.click(() => {
//     switch (counter) {
//       case 3:
//         counter = 0;
//         break;
//       default:
//         counter += 1;
//     }
//     showSlides();
//   });
// });

