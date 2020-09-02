import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../../node_modules/air-datepicker/dist/js/datepicker';
import '../../../node_modules/air-datepicker/dist/css/datepicker.css';
import './datepicker-block.scss';


class Datepicker {
  constructor(datepicker) {
    this.$datepicker = datepicker;
    this.$setButton = datepicker.find('.js-datepicker-block__set-button');
    this.$clearButton = datepicker.find('.js-datepicker-block__clear-button');
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
    this.$setButton.click((evt) => evt.preventDefault());
    this.$clearButton.click((evt) => this.clear(evt));
    this.$datepicker.mousemove(() => this.mousemove());
  }

  clear(evt) {
    evt.preventDefault();
    this.dates.clear();
    this.$clearButton.removeClass('datepicker-block__clear-button_visible');
  }

  mousemove() {
    if (this.dates.selectedDates.length === 0) {
      this.$clearButton.removeClass('datepicker-block__clear-button_visible');
    } else {
      this.$clearButton.addClass('datepicker-block__clear-button_visible');
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
