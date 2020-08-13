import '../../variables.scss';
import './radio.scss';
import './radio.pug';
import $ from 'jquery';

class Radio {
  constructor(radio) {
    this.$radio = radio;
    this.$label = radio.find('.js-radio__label');
    this.$input = radio.find('.js-radio__input');
    this.init();
  }

  init() {
    const onMoouseMove = () => {
      if (this.$input.is(':checked')) {
        this.$label.removeClass('js-radio__label_cursor_pointer');
      } else {
        this.$label.addClass('js-radio__label_cursor_pointer');
      }
    };
  }
}

const radio = new Radio($('.js-radio'));
