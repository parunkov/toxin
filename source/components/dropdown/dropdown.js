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

	let $counter = $('.counter');
	let $text = $('.iqdropdown-selection');
	$('button').click(function() {
		console.log($counter[0].innerHTML);
		$text.html($counter[0].innerHTML);
	});
});

