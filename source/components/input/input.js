import '../../variables.scss';
import './input.scss';
import './input.pug';

$('.input__icon').each(function(i) {
	$('.input__icon').eq(i).click(function(evt) {
		if ($('.input__icon').eq(i).find('.input__icon-text').text() === 'expand_more') {
			$('.input__icon').eq(i).find('.input__icon-text').text('expand_less');
		} else if ($('.input__icon').eq(i).find('.input__icon-text').text() === 'expand_less') {
			$('.input__icon').eq(i).find('.input__icon-text').text('expand_more');
		}
	});
});
