import '../../variables.scss';
import './like.scss';
import './like.pug';
import $ from 'jquery';

class Like {
  constructor(like) {
    this.$like = like;
    this.$input = like.find('.js-like__input');
    this.$text = like.find('.js-like__text');
    this.value = +this.$text.html();
    this.init();
  }

  init() {
    const onClick = () => {
      if (this.$input.prop('checked')) {
        this.$input.prop('checked', false);
        this.$text.html(this.value - 1);
      } else {
        this.$input.prop('checked', true);
        this.$text.html(this.value + 1);
      }
    };
    this.$like.click(onClick);
  }
}

const likes = [];

$('.js-like__label').each((i) => {
  likes[i] = new Like($('.js-like__label').eq(i));
});
