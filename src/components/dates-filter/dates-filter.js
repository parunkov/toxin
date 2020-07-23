import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../input/input';
import '../datepicker-block/datepicker-block';
import './dates-filter.scss';
import $ from 'jquery';
import '../../../node_modules/jquery.maskedinput/src/jquery.maskedinput.js';
import Datepicker from '../datepicker-block/datepicker-block';

class DatesFilter {
	constructor(datesFilter) {
		this.$datesFilter = datesFilter;
		this.$input = datesFilter.find('input');
		this.$icon = datesFilter.find('.js-input__button');
		this.datepicker = new Datepicker(datesFilter.find('.js-datepicker-block'));
		this.$datepickerContainer = datesFilter.find('.js-dates-filter__datepicker-container');
		this.init();
	}

	init() {
		this.$input.attr('disabled', '');
		const months = [
		'янв', 'фев', 'мар', 'апр', 'май', 'июн',
		'июл', 'авг', 'сен', 'окт', 'ноя', 'дек',
		];
		const dateToValue = (date) => (`${(`0${date.getDate()}`).substr(-2)} ${months[date.getMonth()]}`);
		this.$icon.click(() => {
			this.$datepickerContainer.toggleClass('js-dates-filter__datepicker-container_visible');
		});
		this.datepicker.$setBtn.click((e) => {
			e.preventDefault();
			this.$datepickerContainer.removeClass('js-dates-filter__datepicker-container_visible');
			this.$icon.text('expand_more');
			const dates = this.datepicker.dates.selectedDates;
			if (dates[1]) {
			  this.$input.attr('value', `${dateToValue(dates[0])} - ${dateToValue(dates[1])}`);
			} else {
			  this.$input.attr('value', '');
			}
		});
		this.datepicker.$clearBtn.click(() => {
		this.$input.attr('value', '');
		});

		$(document).click((e) => {
			if ((!this.$datepickerContainer.is(e.target) && this.$datepickerContainer.has(e.target).length === 0)
				&& (!e.target.className.includes('datepicker')) && (!this.$datesFilter.is(e.target) && this.$datesFilter.has(e.target).length === 0)
				) {
					this.$icon.text('expand_more');
					this.$datepickerContainer.removeClass('js-dates-filter__datepicker-container_visible');
			}
		});
	}
}

const datesFilter = new DatesFilter($('.js-dates-filter'));

