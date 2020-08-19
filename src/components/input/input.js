import '../../variables.scss';
import './input.scss';
import './input.pug';
import $ from 'jquery';
import '../../../node_modules/jquery.maskedinput/src/jquery.maskedinput';
import '../title/title';

class Input {
 constructor(input) {
    this.init();
  }

  init() {
  	const DATE_MASK = '99.99.9999';
	$('.js-input__field_masked').mask(DATE_MASK);
  }
}

$('.js-input').each((i) => {
  new Input($('.js-input').eq(i));
});
