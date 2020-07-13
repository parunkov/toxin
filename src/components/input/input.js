import '../../variables.scss';
import './input.scss';
import './input.pug';
import $ from 'jquery';

class Input {
	constructor(input) {
		this.$input = input;
		this.$arrow = input.find('.js-input__button');
		this.init();
	}
	init() {
		this.$arrow.click(() => {
		    if (this.$arrow.text() === 'expand_more') {
		      this.$arrow.text('expand_less');
		    } else if (this.$arrow.text() === 'expand_less') {
		      this.$arrow.text('expand_more');
		    }
		});
	}
}

const inputs = [];
$('.js-input').each((i) => {
	inputs[i] = new Input($('.js-input').eq(i));
});

