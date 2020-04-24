import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../components/datepicker/datepicker_plugin.js';
import '../../components/datepicker/datepicker.css';
import './datepicker.scss';

$('.datepicker__content').datepicker({
	minDate: new Date(),
	range: true,
	navTitles: {
	    days: 'MM <i>yyyy</i>',
	    months: 'yyyy',
	    years: 'yyyy1 - yyyy2'
	},
	dateFormat: 'dd.mm.yyyy',
});


let myDatepickers = [];
// window.datepickers = {
// 	i: [],
// 	dates: []
// };

$('.datepicker__content').each(function(i) {
	myDatepickers[i] = $('.datepicker__content').eq(i).datepicker().data('datepicker');
	// myDatepickers[i].mouseup(function() {
	// 	console.log(myDatepickers[i].selectedDates);
	// });
});
let $clear = $('.datepicker__clear');
$('.datepicker__set').each(function(i) {
	$('.datepicker__set').eq(i).click(function(evt) {
		evt.preventDefault();
		// console.log(myDatepickers[i].selectedDates);
		// $clear.eq(i).css({'display' : 'block'});
		// console.log(myDatepickers[i].selectedDates);
		// window.datepickers.i[i] = i;
		// window.datepickers.dates[i] = myDatepickers[i].selectedDates;
		// console.log(window.datepickers);
	});
}); 
$clear.each(function(i) {
	$clear.eq(i).click(function(evt) {
		evt.preventDefault();
		myDatepickers[i].clear();
		$clear.eq(i).css({'display' : 'none'});
		// console.log(myDatepickers[i].selectedDates);
		// window.datepickers.i[i] = i;
		// window.datepickers.dates[i] = myDatepickers[i].selectedDates;
		// console.log(window.datepickers);
	});
});
$('.datepicker__container').each(function(i) {
	// myDatepickers[i] = $('.datepicker__content').eq(i).datepicker().data('datepicker');
	$(this).mouseup(function() {
		if (myDatepickers[i].selectedDates.length === 0) {
			$clear.eq(i).css({'display' : 'none'});
		} else {
			$clear.eq(i).css({'display' : 'block'});
		}
	});
});