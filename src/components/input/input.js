import '../../variables.scss';
import './input.scss';
import './input.pug';
import $ from 'jquery';
import '../../../node_modules/jquery.maskedinput/src/jquery.maskedinput';
import '../title/title';

class Input {
  constructor() {
    this.mask = '99.99.9999';
    this.init();
  }

  init() {
    $('.js-input__field_masked').mask(this.mask);
  }
}

$('.js-input').each((i) => {
  new Input($('.js-input').eq(i));
});
