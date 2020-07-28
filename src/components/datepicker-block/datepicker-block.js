import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../../node_modules/air-datepicker/dist/js/datepicker';
import '../../../node_modules/air-datepicker/dist/css/datepicker.css';
import './datepicker-block.scss';
import $ from 'jquery';


class Datepicker {
  constructor(datepicker) {
    this.$datepicker = datepicker;
    this.$setBtn = datepicker.find('.js-datepicker-block__set-btn');
    this.$clearBtn = datepicker.find('.js-datepicker-block__clear-btn');
    this.$content = datepicker.find('.js-datepicker-block__content');
    this.init();
  }
  init() {
    this.$content.datepicker({
      minDate: new Date(),
      range: true,
      navTitles: {
        days: 'MM <i>yyyy</i>',
        months: 'yyyy',
        years: 'yyyy1 - yyyy2',
      },
      dateFormat: 'dd.mm.yyyy',
    });
    this.dates = this.$content.datepicker().data('datepicker');
    this.$setBtn.click((evt) => this.set(evt));
    this.$clearBtn.click((evt) => this.clear(evt));
    this.$datepicker.mousemove(() => this.mousemove());
  }
  set(evt) {
    evt.preventDefault();
  }
  clear(evt) {
    evt.preventDefault();
    this.dates.clear();
    this.$clearBtn.removeClass('datepicker-block__clear-btn_visible');
  }
  mousemove() {
    if (this.dates.selectedDates.length === 0) {
      this.$clearBtn.removeClass('datepicker-block__clear-btn_visible');
    } else {
      this.$clearBtn.addClass('datepicker-block__clear-btn_visible');
    }
  }
  setDates(first, second) {
    this.dates.clear();
    if (first && second) {
      this.dates.selectDate([first, second]);
    }
  }
}


export default Datepicker;

