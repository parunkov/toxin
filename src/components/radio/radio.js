import '../../variables.scss';
import './radio.scss';
import './radio.pug';

const $label = $('.radio__label');
$label.mousemove(() => {
	$label.each((i) => {
		if ($label.eq(i).find('.radio__input').is(':checked')) {
			$label.eq(i).removeClass('radio__label_cursor_pointer');
		} else {
			$label.eq(i).addClass('radio__label_cursor_pointer');
		}
	});
});
