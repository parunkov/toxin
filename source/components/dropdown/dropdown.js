import '../../variables.scss';
import './dropdown.scss';
import './dropdown.pug';
// import './item-quantity-dropdown.min.css';
import './index.js';

let options = {
	maxItems: Infinity,
	minItems: 0,
	selectionText: 'номер',
	textPlural: 'номеров',
	controls: {
		position: 'right',
		displayCls: 'iqdropdown-content',
		controlsCls: 'iqdropdown-item-controls',
		counterCls: 'counter',
	}
}
// console.log(options);

$(document).ready(() => {
	$('.iqdropdown').iqDropdown(options);

	let $counter = $('.iqdropdown .counter');
	let $decrementBtn = $('.iqdropdown .button-decrement');
	let $text = $('.iqdropdown-selection');

	let opacytyBtn = function() {
		for (let i = 0; i < $counter.length; i++) {
			// console.log($counter.eq(i).html());
			if ($counter.eq(i).html() === '0') {
				// console.log('!!!');
				$decrementBtn.eq(i).css({'opacity' : '0.5'});
			} else {
				$decrementBtn.eq(i).css({'opacity' : '1'});
			}
		}
	}
	opacytyBtn();


	$('button').click(function() {
		opacytyBtn();

		// console.log($counter[0].innerHTML);
		$text.html($counter[0].innerHTML);
	});
});

