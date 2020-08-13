import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../rate/rate';
import './room-card.scss';

class Card {
  constructor(card) {
    this.$card = card;
    this.$slides = card.find('.js-room-card__slide');
    this.length = this.$slides.length;
    this.$left = card.find('.js-room-card__arrow_left');
    this.$right = card.find('.js-room-card__arrow_right');
    this.$controls = card.find('.js-room-card__control');
    this.counter = 0;
    this.numberLeftSlide = this.length;
    this.numberRightSlide = 1;
    this.init();
  }

  init() {
    const setSlidesNumbers = (j) => {
      this.numberLeftSlide = j - 1;
      this.numberRightSlide = j + 1;
      if (this.counter === 0) {
        this.numberLeftSlide = this.length - 1;
      }
      if (this.counter === (this.length - 1)) {
        this.numberRightSlide = 0;
      }
    };
    this.showSlides();
    this.$controls.each((j) => {
      this.$controls.eq(j).click((evt) => {
        evt.preventDefault();
        this.counter = j;
        setSlidesNumbers(this.counter);
        this.showSlides();
      });
    });
    this.$left.click(() => {
      switch (this.counter) {
        case 0:
          this.counter = this.length - 1;
          setSlidesNumbers(this.counter);
          break;
        default:
          this.counter -= 1;
          setSlidesNumbers(this.counter);
      }
      this.showSlides();
    });
    this.$right.click(() => {
      switch (this.counter) {
        case (this.length - 1):
          this.counter = 0;
          setSlidesNumbers(this.counter);
          break;
        default:
          this.counter += 1;
          setSlidesNumbers(this.counter);
      }
      this.showSlides();
    });
  }

  showSlides() {
    const changeSlides = (left, center, right) => {
      this.$slides.eq(left).addClass('js-room-card__slide-left');
      this.$slides.eq(center).addClass('room-card__slide-active');
      this.$slides.eq(right).addClass('js-room-card__slide-right');
      this.$controls.eq(center).addClass('room-card__control_active');
    };
    this.$slides.removeClass('js-room-card__slide-left');
    this.$slides.removeClass('room-card__slide-active');
    this.$slides.removeClass('js-room-card__slide-right');
    this.$controls.removeClass('room-card__control_active');
    // console.log(this.numberLeftSlide + ' ' + this.counter + ' ' + this.numberRightSlide);
    changeSlides(this.numberLeftSlide, this.counter, this.numberRightSlide);
  }
}

export default Card;
