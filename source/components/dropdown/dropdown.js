import '../../variables.scss';
import './dropdown.scss';
import './dropdown.pug';

const num2str = function(n, text_forms) {  
    n = Math.abs(n) % 100; var n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 == 1) { return text_forms[0]; }
    return text_forms[2];
}

$(document).ready(() => {

	let $type = $('.dropdown__type');
	let $counter = $('.iqdropdown .counter');
	let $decrementBtn = $('.iqdropdown .button-decrement');
	let $incrementBtn = $('.iqdropdown .button-increment');
	let $text = $('.iqdropdown-selection');

	$type.each(function(i) {
		if ($type.eq(i).html() === 'rooms') {
			$text.eq(i).html('0 спален, 0 кроватей, 0 ванных');
		} else {
			$text.eq(i).html('Сколько гостей');
		}
	});

	$counter.each(function(i) {
		$incrementBtn.eq(i).click(function() {
			let count = +$counter.eq(i).html();
			count++;
			$counter.eq(i).html(count);
		});
		$decrementBtn.eq(i).click(function() {
			let count = +$counter.eq(i).html();
			if (count <= 0) {
				count = 0;
			} else{
				count--;
			}
			$counter.eq(i).html(count);
		});
	});

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

	$('.iqdropdown').each(function(i) {

		$('.iqdropdown').eq(i).find('.iqdropdown-selection').click(function() {
			$('.iqdropdown').eq(i).toggleClass('menu-open');
		});

		$('.iqdropdown').eq(i).find('button').click(function() {
			opacytyBtn();

			let $itemCounter = $('.iqdropdown-menu').eq(i).find('.counter');
			if ($type.eq(i).html() === 'rooms') {

				let textPart0 = $itemCounter[0].innerHTML + ' ' + num2str(+$itemCounter[0].innerHTML, ['спальня', 'спальни', 'спален']) + ',';
				let textPart1 = $itemCounter[1].innerHTML + ' ' + num2str(+$itemCounter[1].innerHTML, ['кровать', 'кровати', 'кроватей']) + ',';
				let textPart2 = $itemCounter[2].innerHTML + ' ' + num2str(+$itemCounter[2].innerHTML, ['ванная', 'ванные', 'ванных']);

				$('.iqdropdown-selection').eq(i).html(textPart0 + ' ' + textPart1 + ' ' + textPart2);

			} else {
				let guestsNumber = +$itemCounter[0].innerHTML + +$itemCounter[1].innerHTML + +$itemCounter[2].innerHTML;
				$('.iqdropdown-selection').eq(i).html(guestsNumber + ' ' + num2str(+guestsNumber, ['гость', 'гостя', 'гостей']));
			}

		});

		$('.iqdropdown').eq(i).find('.dropdown__set').click(function() {
			$('.iqdropdown').eq(i).find('.dropdown__clear').css({'display' : 'inline'});
		});
		$('.iqdropdown').eq(i).find('.dropdown__clear').click(function() {
			$('.iqdropdown').eq(i).find('.counter').html('0');
			opacytyBtn();
			$('.iqdropdown').eq(i).find('.iqdropdown-selection').html('Сколько гостей');
			$('.iqdropdown').eq(i).find('.dropdown__clear').css({'display' : 'none'});
		});
	});
});
