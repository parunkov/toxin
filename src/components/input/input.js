import '../../variables.scss';
import './input.scss';
import './input.pug';
import $ from 'jquery';

class Input {
	constructor(input) {
		this.$input = input;
		this.$arrow = input.find('.input__button');
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
$('.input').each((i) => {
	inputs[i] = new Input($('.input').eq(i));
});

// const $icon = $('.input__button');

// $icon.each((i) => {
//   $icon.eq(i).click(() => {
//     if ($icon.eq(i).text() === 'expand_more') {
//       $icon.eq(i).text('expand_less');
//     } else if ($icon.eq(i).text() === 'expand_less') {
//       $icon.eq(i).text('expand_more');
//     }
//   });
// });
