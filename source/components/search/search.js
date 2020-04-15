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
let arrival = $('.search__input-1');
let departure = $('.search__input-2');
let dateToValue = (date) => date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).substr(-2) + '-' + ('0' + date.getDate()).substr(-2);

setBtn.click(function() {
	$('.input__icon-text').text('expand_more');
});


$('.search__container .input__icon'). click(function(evt) {
	evt.preventDefault();
	if (datepickerContainer.css('display') === 'block') {
		datepickerContainer.css({'display' : 'none'});
		$('.input__icon-text').text('expand_more');
	} else {
		datepickerContainer.css({'display' : 'block'});
		$('.input__icon-text').text('expand_less');
	}
	console.log(datepickerContainer.css('display'));
	setBtn.click(function(evt) {
		evt.preventDefault();
		datepickerContainer.css({'display' : 'none'});
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
});

