import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../components/page/page.js';
import '../../components/page_header/page_header.js';
import '../../components/input/input.js';
import '../../components/dropdown/dropdown.js';
import '../../components/slider/slider.js';
import '../../components/checkbox/checkbox.js';
import '../../components/card/card.js';
import '../../components/page_footer/page_footer.js';
import '../../components/datepicker/datepicker.js';
import '../../components/pagination/pagination.js';
import './search_room.scss';

let myDatepicker = $('.search_room__datepicker-container .datepicker__content').datepicker().data('datepicker');
let datepickerContainer = $('.search_room__datepicker-container');
let setBtn = $('.search_room__datepicker-container .datepicker__set');
let input = $('.search_room__input');
let months = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
let dateToValue = (date) => (('0' + date.getDate()).substr(-2) + ' ' + months[date.getMonth()]);

$('.search_room__container .input__icon'). click(function(evt) {
	evt.preventDefault();
	datepickerContainer.css({'display' : 'block'});
	setBtn.click(function(evt) {
		evt.preventDefault();
		datepickerContainer.css({'display' : 'none'});
		if (myDatepicker.selectedDates[0]) {
			input.attr('value', dateToValue(myDatepicker.selectedDates[0]));
		} else {
			input.attr('value', '');
		}
		if (myDatepicker.selectedDates[1]) {
			input.attr('value', dateToValue(myDatepicker.selectedDates[0]) + ' - ' + dateToValue(myDatepicker.selectedDates[1]));
		} 
	});
});

$('.search_room__expandable-h3').click(function(evt) {
	evt.preventDefault();
	$('.search_room__expandable-text').toggleClass('d-none');
	$('.search_room__expandable-h3').toggleClass('search_room__expandable-h3--rotate');
});

$('.search_room__checkbox-1:gt(0)').prop('checked', true);
$('.search_room__checkbox-3:lt(4)').prop('checked', true);
$('.search_room__checkbox-3').eq(0).prop('checked', false);

$(document).ready(() => {
	$('.search_room__dropdown-wrap .iqdropdown button').eq(1).trigger('click');
	$('.search_room__dropdown-wrap .iqdropdown button').eq(1).trigger('click');
	$('.search_room__dropdown-wrap .iqdropdown button').eq(3).trigger('click');
	$('.search_room__dropdown-wrap .iqdropdown button').eq(5).trigger('click');
	$('.search_room__dropdown-2-wrap .iqdropdown button').eq(1).trigger('click');
	$('.search_room__dropdown-2-wrap .iqdropdown button').eq(1).trigger('click');
	$('.search_room__dropdown-2-wrap .iqdropdown button').eq(3).trigger('click');
	$('.search_room__dropdown-2-wrap .iqdropdown button').eq(3).trigger('click');
});
