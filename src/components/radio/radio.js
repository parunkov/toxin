import '../../variables.scss';
import './radio.scss';
import './radio.pug';

class Radio {
	constructor(radio) {
		this.$radio = radio;
		this.$label = radio.find('.radio__label');
		this.$input = radio.find('.radio__input');
		this.init();
	}
	init() {
		const onMoouseMove = () => {
			if (this.$input.is(':checked')) {
				this.$label.removeClass('radio__label_cursor_pointer');
			} else {
				this.$label.addClass('radio__label_cursor_pointer');
			}
		}
	}
}

const radio = new Radio($('.radio'));




// const $label = $('.radio__label');
// $label.mousemove(() => {
// 	$label.each((i) => {
// 		if ($label.eq(i).find('.radio__input').is(':checked')) {
// 			$label.eq(i).removeClass('radio__label_cursor_pointer');
// 		} else {
// 			$label.eq(i).addClass('radio__label_cursor_pointer');
// 		}
// 	});
// });
