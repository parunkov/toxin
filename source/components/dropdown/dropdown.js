import '../../variables.scss';
import './dropdown.scss';
import './dropdown.pug';
import './index.js';

const num2str = function(n, text_forms) {  
    n = Math.abs(n) % 100; var n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 == 1) { return text_forms[0]; }
    return text_forms[2];
}

let options = {
	// maxItems: Infinity,
	// minItems: 0,
	selectionText: ' ',
	textPlural: ' ',
	// controls: {
	// 	position: 'right',
	// 	displayCls: 'iqdropdown-content',
	// 	controlsCls: 'iqdropdown-item-controls',
	// 	counterCls: 'counter',
	// }
}
// console.log(options);

$(document).ready(() => {
	$('.iqdropdown').iqDropdown(options);

	let $type = $('.dropdown__type');
	let $counter = $('.iqdropdown .counter');
	let $decrementBtn = $('.iqdropdown .button-decrement');
	let $text = $('.iqdropdown-selection');

	$type.each(function(i) {
		if ($type.eq(i).html() === 'rooms') {
			$text.eq(i).html('0 спален, 0 кроватей, 0 ванных');
		} else {
			$text.eq(i).html('Сколько гостей');
		}
	});

	// console.log($type);

	let opacytyBtn = function() {
		for (let i = 0; i < $counter.length; i++) {
			if ($counter.eq(i).html() === '0') {
				$decrementBtn.eq(i).css({'opacity' : '0.5'});
			} else {
				$decrementBtn.eq(i).css({'opacity' : '1'});
			}
		}
	}
	opacytyBtn();


	$('button').click(function() {
		opacytyBtn();

		$type.each(function(i) {
			let $itemCounter = $('.iqdropdown-menu').eq(i).find('.counter');
			console.log($itemCounter);
			if ($type.eq(i).html() === 'rooms') {

				let textPart0 = $itemCounter[0].innerHTML + ' ' + num2str(+$itemCounter[0].innerHTML, ['спальня', 'спальни', 'спален']) + ',';
				console.log(textPart0);
				let textPart1 = $itemCounter[1].innerHTML + ' ' + num2str(+$itemCounter[1].innerHTML, ['кровать', 'кровати', 'кроватей']) + ',';
				console.log(textPart1);
				let textPart2 = $itemCounter[2].innerHTML + ' ' + num2str(+$itemCounter[2].innerHTML, ['ванная', 'ванные', 'ванных']);
				console.log(textPart2);

				$('.iqdropdown-selection').eq(i).html(textPart0 + ' ' + textPart1 + ' ' + textPart2);

			} else {
				let guestsNumber = +$itemCounter[0].innerHTML + +$itemCounter[1].innerHTML + +$itemCounter[2].innerHTML;
				$('.iqdropdown-selection').eq(i).html(guestsNumber + ' ' + num2str(+guestsNumber, ['гость', 'гостя', 'гостей']));
			}
		});

		// console.log($counter[0].innerHTML);
		// $text.html($counter[0].innerHTML);
	});
});

