import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../components/input/input.js';
import '../../components/dropdown/dropdown.js';
import '../../components/btn/btn.js';
import '../../components/datepicker/datepicker.js';
import './search.scss';

let myDatepicker = $('.search__datepicker-container .datepicker__content').datepicker().data('datepicker');
let datepickerContainer = $('.search__datepicker-container');
let setBtn = $('.search__datepicker-container .datepicker__set');
let clearBtn = $('.search__datepicker-container .datepicker__clear');
let arrival = $('.search__input-1');
let departure = $('.search__input-2');
// let dateToValue = (date) => date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).substr(-2) + '-' + ('0' + date.getDate()).substr(-2);
let dateToValue = (date) =>  ('0' + date.getDate()).substr(-2) + '.' + ('0' + (date.getMonth() + 1)).substr(-2) + '.' + date.getFullYear();

setBtn.click(function() {
	// $('.input__icon-text').text('expand_more');
});


$('.search__container .input__icon'). click(function(evt) {
	evt.preventDefault();
	if (datepickerContainer.css('display') === 'block' && $(this).find('.input__icon-text').text() === 'expand_more') {
		datepickerContainer.css({'display' : 'none'});
		$('.search__input-wrap .input__icon-text').text('expand_more');
		$(this).find('.input__icon-text').text('expand_more');
		$('.search__input-wrap .input__icon').css({'cursor' : 'pointer'});
	} else if (datepickerContainer.css('display') === 'block' && $(this).find('.input__icon-text').text() === 'expand_less') {
		$(this).find('.input__icon-text').text('expand_more');
	} else if (datepickerContainer.css('display') === 'none' && $(this).find('.input__icon-text').text() === 'expand_less') {
		datepickerContainer.css({'display' : 'block'});
		$('.search__input-wrap .input__icon-text').text('expand_more');
		$('.search__input-wrap .input__icon').css({'cursor' : 'default'});
		$(this).find('.input__icon-text').text('expand_less');
		$(this).css({'cursor' : 'pointer'});
	}
	setBtn.click(function(evt) {
		evt.preventDefault();
		datepickerContainer.css({'display' : 'none'});
		$('.search__input-wrap .input__icon-text').text('expand_more');
		if (myDatepicker.selectedDates[0]) {
			arrival.attr('value', dateToValue(myDatepicker.selectedDates[0]));
		} else {
			arrival.attr('value', '');
		}
		if (myDatepicker.selectedDates[1]) {
			departure.attr('value', dateToValue(myDatepicker.selectedDates[1]));
		} else {
			departure.attr('value', '');
		}
	});
	clearBtn.click(function(evt) {
		evt.preventDefault();
		arrival.attr('value', '');
		departure.attr('value', '');
	});
});

