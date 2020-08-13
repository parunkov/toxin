import '../../variables.scss';
import './rate.scss';
import './rate.pug';
import $ from 'jquery';

class Rate {
  constructor(rate) {
    this.$rate = rate;
    this.$stars = rate.children();
    this.init();
  }

  init() {
    const stars = this.$stars;
    if (this.$rate.attr('data-active')) {
      this.$stars.each(function (j) {
        $(this).click(() => {
          stars.html('star_border');
          stars.slice(0, j + 1).html('star');
        });
      });
    }
  }
}

export default Rate;
