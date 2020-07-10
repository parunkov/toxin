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
		this.arrival = new Dropdown(datesSelector.find('.dropdown_theme_date:first-child'));
		this.departure = new Dropdown(datesSelector.find('.dropdown_theme_date:nth-child(2)'));
		this.datepicker = new Datepicker(datesSelector.find('.datepicker-block'));
		this.init();
	}
	init() {
		const dateToValue = (date) => `${(`0${date.getDate()}`).substr(-2)}.${(`0${date.getMonth() + 1}`).substr(-2)}.${date.getFullYear()}`;
		const $datepickerContainer = this.$datesSelector.find('.dates-selector__datepicker');

		this.arrival.$input.mask('99.99.9999');
		this.departure.$input.mask('99.99.9999');

		const onArrowClick = (evt, inputArrow) => {
			evt.preventDefault();
			if ($datepickerContainer.hasClass('dates-selector__datepicker_visible') && inputArrow.text() === 'expand_more') {
				this.arrival.$arrow.text('expand_less');
				this.departure.$arrow.text('expand_less');
				inputArrow.text('expand_more');
			} else if ($datepickerContainer.hasClass('dates-selector__datepicker_visible') && inputArrow.text() === 'expand_less') {
				inputArrow.text('expand_more');
				$datepickerContainer.removeClass('dates-selector__datepicker_visible');
				this.arrival.$arrow.removeClass('dropdown__arrow_cursor_default');
				this.departure.$arrow.removeClass('dropdown__arrow_cursor_default');
			} else if (!$datepickerContainer.hasClass('dates-selector__datepicker_visible') && inputArrow.text() === 'expand_less') {
				$datepickerContainer.addClass('dates-selector__datepicker_visible');
				this.arrival.$arrow.text('expand_more');
				this.departure.$arrow.text('expand_more');
				inputArrow.text('expand_less');
				inputArrow.removeClass('dropdown__arrow_cursor_default');
			} else {
				$datepickerContainer.addClass('dates-selector__datepicker_visible');
				this.arrival.$arrow.text('expand_more');
				this.departure.$arrow.text('expand_more');
				this.arrival.$arrow.addClass('dropdown__arrow_cursor_default');
				this.departure.$arrow.addClass('dropdown__arrow_cursor_default');
				inputArrow.text('expand_less');
				inputArrow.removeClass('dropdown__arrow_cursor_default');
			}

		}

		this.arrival.$arrow.click((e) => onArrowClick(e, this.arrival.$arrow));
		this.departure.$arrow.click((e) => onArrowClick(e, this.departure.$arrow));

		const onSetBtnClick = (e) => {
			e.preventDefault();
			$datepickerContainer.removeClass('dates-selector__datepicker_visible');
			this.arrival.$arrow.removeClass('dropdown__arrow_cursor_default');
			this.departure.$arrow.removeClass('dropdown__arrow_cursor_default');
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

		// const $datesSelector = $('.dates-selector');

		$(document).click((e) => {
			if ((!$datepickerContainer.is(e.target) && $datepickerContainer.has(e.target).length === 0)
				&& (!e.target.className.includes('datepicker'))
				&& (!this.$datesSelector.find('.dropdown__wrapper').is(e.target) && this.$datesSelector.find('.dropdown__wrapper').has(e.target).length === 0)) {
				this.arrival.$arrow.text('expand_more');
				this.departure.$arrow.text('expand_more');
				$datepickerContainer.removeClass('dates-selector__datepicker_visible');
			}
		});
	}
}

const datesSelectors = [];
$('.dates-selector').each((i) =>{
	datesSelectors[i] = new DatesSelector($('.dates-selector').eq(i));
});

// $(document).ready(() => {
//   const $datesSelector = $('.dates-selector');

//   $datesSelector.each((i) => {

//     const $myDatepicker = $datesSelector.eq(i).find('.dates-selector__datepicker .datepicker-block__content').datepicker().data('datepicker');
//     const $datepickerContainer = $datesSelector.eq(i).find('.dates-selector__datepicker');
//     const $setBtn = $datesSelector.eq(i).find('.dates-selector__datepicker .datepicker-block__set-btn');
//     const $clearBtn = $datesSelector.eq(i).find('.dates-selector__datepicker .datepicker-block__clear-btn');
//     const $arrival = $datesSelector.eq(i).find('.dropdown_theme_date:first-child .dropdown__input');
//     const $departure = $datesSelector.eq(i).find('.dropdown_theme_date:nth-child(2) .dropdown__input');
//     const $icon = $datesSelector.eq(i).find('.dropdown_theme_date .dropdown__arrow');

//     const dateToValue = (date) => `${(`0${date.getDate()}`).substr(-2)}.${(`0${date.getMonth() + 1}`).substr(-2)}.${date.getFullYear()}`;

//     // $arrival.attr('disabled', '');
//     // $departure.attr('disabled', '');
//     $arrival.mask('99.99.9999');
//     $departure.mask('99.99.9999');

//     $icon.click(function (evt) {
//       evt.preventDefault();
//       if ($datepickerContainer.hasClass('dates-selector__datepicker_visible') && $(this).text() === 'expand_more') {
//         $icon.text('expand_less');
//         $(this).text('expand_more');
//       } else if ($datepickerContainer.hasClass('dates-selector__datepicker_visible') && $(this).text() === 'expand_less') {
//         $(this).text('expand_more');
//         $datepickerContainer.removeClass('dates-selector__datepicker_visible');
//         $icon.removeClass('dropdown__arrow_cursor_default');
//       } else if (!$datepickerContainer.hasClass('dates-selector__datepicker_visible') && $(this).text() === 'expand_less') {
//         $datepickerContainer.addClass('dates-selector__datepicker_visible');
//         $icon.text('expand_more');
//         $(this).text('expand_less');
//         $(this).removeClass('dropdown__arrow_cursor_default');
//       } else {
//         $datepickerContainer.addClass('dates-selector__datepicker_visible');
//         $icon.text('expand_more');
//         $icon.addClass('dropdown__arrow_cursor_default');
//         $(this).text('expand_less');
//         $(this).removeClass('dropdown__arrow_cursor_default');
//       }

//       $setBtn.click((e) => {
//         e.preventDefault();
//         $datepickerContainer.removeClass('dates-selector__datepicker_visible');
//         $icon.removeClass('dropdown__arrow_cursor_default');
//         $icon.text('expand_more');
//         if ($myDatepicker.selectedDates[0]) {
//           $arrival.attr('value', dateToValue($myDatepicker.selectedDates[0]));
//         } else {
//           $arrival.attr('value', '');
//         }
//         if ($myDatepicker.selectedDates[1]) {
//           $departure.attr('value', dateToValue($myDatepicker.selectedDates[1]));
//         } else {
//           $departure.attr('value', '');
//         }
//       });
//       $clearBtn.click((e) => {
//         e.preventDefault();
//         $arrival.attr('value', '');
//         $departure.attr('value', '');
//       });
//     });

//     $(document).click((e) => {
//       if ((!$datepickerContainer.eq(i).is(e.target) && $datepickerContainer.eq(i).has(e.target).length === 0)
//         && (!e.target.className.includes('datepicker'))
//         && (!$datesSelector.eq(i).find('.dropdown__wrapper').is(e.target) && $datesSelector.eq(i).find('.dropdown__wrapper').has(e.target).length === 0)) {
//         $icon.text('expand_more');
//         $datepickerContainer.removeClass('dates-selector__datepicker_visible');
//       }
//     });
//   });
// });