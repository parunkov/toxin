import '../../variables.scss';
import './input.scss';
import './input.pug';
import $ from 'jquery';
import '../../../node_modules/jquery.maskedinput/src/jquery.maskedinput';
import '../title/title';

class Input {
  constructor() {
    const MASK = '99.99.9999';
    $('.js-input__field_masked').mask(MASK);
  }
}

$('.js-input').each((i) => {
  new Input($('.js-input__field_masked').eq(i));
});
