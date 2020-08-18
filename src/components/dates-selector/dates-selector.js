import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../input/input';
import $ from 'jquery';
import Dropdown from '../dropdown/dropdown';
import Datepicker from '../datepicker-block/datepicker-block';
import './dates-selector.scss';
import '../../../node_modules/jquery.maskedinput/src/jquery.maskedinput';


const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');

dayjs.extend(customParseFormat);

class DatesSelector {
  constructor(datesSelector) {
    this.$datesSelector = datesSelector;
    this.arrival = new Dropdown(datesSelector.find('.dropdown_theme_date:first-child'));
    this.departure = new Dropdown(datesSelector.find('.dropdown_theme_date:nth-child(2)'));
    this.datepicker = new Datepicker(datesSelector.find('.js-datepicker-block'));
    this.arrivalDate = {};
    this.departureDate = {};
    this.init();
    this.onChange();
  }

  init() {
    const dateToValue = (date) => `${(`0${date.getDate()}`).substr(-2)}.${(`0${date.getMonth() + 1}`).substr(-2)}.${date.getFullYear()}`;
    const $datepickerContainer = this.$datesSelector.find('.js-dates-selector__datepicker');
    const DATE_MASK = '99.99.9999';
    
    this.arrival.$input.mask(DATE_MASK);
    this.departure.$input.mask(DATE_MASK);

    const onArrowClick = (evt, inputArrow) => {
      evt.preventDefault();
      if ($datepickerContainer.hasClass('dates-selector__datepicker_visible') && inputArrow.text() === 'expand_more') {
        this.arrival.$arrow.text('expand_less');
        this.departure.$arrow.text('expand_less');
        inputArrow.text('expand_more');
      } else if ($datepickerContainer.hasClass('dates-selector__datepicker_visible') && inputArrow.text() === 'expand_less') {
        inputArrow.text('expand_more');
        $datepickerContainer.removeClass('dates-selector__datepicker_visible');
        this.arrival.$arrow.removeClass('js-dropdown__arrow_cursor_default');
        this.departure.$arrow.removeClass('js-dropdown__arrow_cursor_default');
      } else if (!$datepickerContainer.hasClass('dates-selector__datepicker_visible') && inputArrow.text() === 'expand_less') {
        $datepickerContainer.addClass('dates-selector__datepicker_visible');
        this.arrival.$arrow.text('expand_more');
        this.departure.$arrow.text('expand_more');
        inputArrow.text('expand_less');
        inputArrow.removeClass('js-dropdown__arrow_cursor_default');
      } else {
        $datepickerContainer.addClass('dates-selector__datepicker_visible');
        this.arrival.$arrow.text('expand_more');
        this.departure.$arrow.text('expand_more');
        this.arrival.$arrow.addClass('js-dropdown__arrow_cursor_default');
        this.departure.$arrow.addClass('js-dropdown__arrow_cursor_default');
        inputArrow.text('expand_less');
        inputArrow.removeClass('js-dropdown__arrow_cursor_default');
      }
    };

    this.arrival.$arrow.click((e) => onArrowClick(e, this.arrival.$arrow));
    this.departure.$arrow.click((e) => onArrowClick(e, this.departure.$arrow));

    const onSetBtnClick = (e) => {
      e.preventDefault();
      $datepickerContainer.removeClass('dates-selector__datepicker_visible');
      this.arrival.$arrow.removeClass('js-dropdown__arrow_cursor_default');
      this.departure.$arrow.removeClass('js-dropdown__arrow_cursor_default');
      this.arrival.$arrow.text('expand_more');
      this.departure.$arrow.text('expand_more');
      if (this.datepicker.dates.selectedDates[0]) {
        this.arrival.$input.val(dateToValue(this.datepicker.dates.selectedDates[0]));
      } else {
        this.arrival.$input.val('');
      }
      if (this.datepicker.dates.selectedDates[1]) {
        this.departure.$input.val(dateToValue(this.datepicker.dates.selectedDates[1]));
      } else {
        this.departure.$input.val('');
      }

      this.arrivalDate = dayjs(this.datepicker.dates.selectedDates[0]);
      this.departureDate = dayjs(this.datepicker.dates.selectedDates[1]);
    };
    const onClearBtnClick = (e) => {
      e.preventDefault();
      this.arrival.$input.val('');
      this.departure.$input.val('');
      this.arrivalDate = {};
      this.departureDate = {};
    };

    this.datepicker.$setBtn.click((e) => onSetBtnClick(e));
    this.datepicker.$clearBtn.click((e) => onClearBtnClick(e));

    $(document).click((e) => {
      if ((!$datepickerContainer.is(e.target) && $datepickerContainer.has(e.target).length === 0)
        && (!e.target.className.includes('datepicker'))
        && (!this.$datesSelector.find('.js-dropdown__wrapper').is(e.target) && this.$datesSelector.find('.js-dropdown__wrapper').has(e.target).length === 0)) {
        this.arrival.$arrow.text('expand_more');
        this.departure.$arrow.text('expand_more');
        $datepickerContainer.removeClass('dates-selector__datepicker_visible');
      }
    });
  }

  onChange() {
    const arrival = this.arrival.$input;
    const departure = this.departure.$input;
    [this.arrivalDate, this.departureDate] = this.datepicker.dates.selectedDates;
    const onInputChange = (input, date) => {
      const inputDate = dayjs(input.val(), 'DD.MM.YYYY');
      if (!inputDate.isValid() || inputDate.isBefore(date)) {
        input.val('');
        return {};
      }
      return inputDate;
    };
    const setInputs = () => {
      if (this.arrivalDate.isValid()
        && this.departureDate.isValid()
        && this.arrivalDate.isBefore(this.departureDate)) {
        this.datepicker.setDates(this.arrivalDate.$d, this.departureDate.$d);
      } else {
        this.departureDate = {};
        departure.val('');
      }
    };
    const onArrivalChange = () => {
      this.arrivalDate = onInputChange(arrival, dayjs().subtract(1, 'day'));
      setInputs();
    };
    const onDepartureChange = () => {
      this.departureDate = onInputChange(departure, dayjs());
      setInputs();
    };
    arrival.change(onArrivalChange);
    departure.change(onDepartureChange);
  }
}

export default DatesSelector;
