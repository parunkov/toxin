import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../input/input';
import '../dropdown/dropdown';
import '../datepicker-block/datepicker-block';
import './dates-selector.scss';
import $ from 'jquery';
import '../../../node_modules/jquery.maskedinput/src/jquery.maskedinput.js';
import Dropdown from '../dropdown/dropdown';
import Datepicker from '../datepicker-block/datepicker-block';

class DatesSelector {
	constructor(datesSelector) {
		this.$datesSelector = datesSelector;
		this.arrival = new Dropdown(datesSelector.find('.js-dropdown_theme_date:first-child'));
		this.departure = new Dropdown(datesSelector.find('.js-dropdown_theme_date:nth-child(2)'));
		this.datepicker = new Datepicker(datesSelector.find('.js-datepicker-block'));
		this.init();
	}
	init() {
		const dateToValue = (date) => `${(`0${date.getDate()}`).substr(-2)}.${(`0${date.getMonth() + 1}`).substr(-2)}.${date.getFullYear()}`;
		const $datepickerContainer = this.$datesSelector.find('.js-dates-selector__datepicker');

		this.arrival.$input.mask('99.99.9999');
		this.departure.$input.mask('99.99.9999');

		const onArrowClick = (evt, inputArrow) => {
			evt.preventDefault();
			if ($datepickerContainer.hasClass('js-dates-selector__datepicker_visible') && inputArrow.text() === 'expand_more') {
				this.arrival.$arrow.text('expand_less');
				this.departure.$arrow.text('expand_less');
				inputArrow.text('expand_more');
			} else if ($datepickerContainer.hasClass('js-dates-selector__datepicker_visible') && inputArrow.text() === 'expand_less') {
				inputArrow.text('expand_more');
				$datepickerContainer.removeClass('js-dates-selector__datepicker_visible');
				this.arrival.$arrow.removeClass('js-dropdown__arrow_cursor_default');
				this.departure.$arrow.removeClass('js-dropdown__arrow_cursor_default');
			} else if (!$datepickerContainer.hasClass('js-dates-selector__datepicker_visible') && inputArrow.text() === 'expand_less') {
				$datepickerContainer.addClass('js-dates-selector__datepicker_visible');
				this.arrival.$arrow.text('expand_more');
				this.departure.$arrow.text('expand_more');
				inputArrow.text('expand_less');
				inputArrow.removeClass('js-dropdown__arrow_cursor_default');
			} else {
				$datepickerContainer.addClass('js-dates-selector__datepicker_visible');
				this.arrival.$arrow.text('expand_more');
				this.departure.$arrow.text('expand_more');
				this.arrival.$arrow.addClass('js-dropdown__arrow_cursor_default');
				this.departure.$arrow.addClass('js-dropdown__arrow_cursor_default');
				inputArrow.text('expand_less');
				inputArrow.removeClass('js-dropdown__arrow_cursor_default');
			}

		}

		this.arrival.$arrow.click((e) => onArrowClick(e, this.arrival.$arrow));
		this.departure.$arrow.click((e) => onArrowClick(e, this.departure.$arrow));

		const onSetBtnClick = (e) => {
			e.preventDefault();
			$datepickerContainer.removeClass('js-dates-selector__datepicker_visible');
			this.arrival.$arrow.removeClass('js-dropdown__arrow_cursor_default');
			this.departure.$arrow.removeClass('js-dropdown__arrow_cursor_default');
			this.arrival.$arrow.text('expand_more');
			this.departure.$arrow.text('expand_more');
			if (this.datepicker.dates.selectedDates[0]) {
				this.arrival.$input.attr('value', dateToValue(this.datepicker.dates.selectedDates[0]));
			} else {
				this.arrival.$input.attr('value', '');
			}
			if (this.datepicker.dates.selectedDates[1]) {
				this.departure.$input.attr('value', dateToValue(this.datepicker.dates.selectedDates[1]));
			} else {
				this.departure.$input.attr('value', '');
			}
		}
		const onClearBtnClick = (e) => {
			e.preventDefault();
			this.arrival.$input.attr('value', '');
			this.departure.$input.attr('value', '');
		}

		this.datepicker.$setBtn.click((e) => onSetBtnClick(e));
		this.datepicker.$clearBtn.click((e) => onClearBtnClick(e));

		$(document).click((e) => {
			if ((!$datepickerContainer.is(e.target) && $datepickerContainer.has(e.target).length === 0)
				&& (!e.target.className.includes('datepicker'))
				&& (!this.$datesSelector.find('.js-dropdown__wrapper').is(e.target) && this.$datesSelector.find('.js-dropdown__wrapper').has(e.target).length === 0)) {
				this.arrival.$arrow.text('expand_more');
				this.departure.$arrow.text('expand_more');
				$datepickerContainer.removeClass('js-dates-selector__datepicker_visible');
			}
		});
	}
}

export default DatesSelector;
