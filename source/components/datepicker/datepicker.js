import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
// import './datepicker_plugin';
// import './datepicker.css';
import '../../../node_modules/air-datepicker/dist/js/datepicker.js';
import '../../../node_modules/air-datepicker/dist/css/datepicker.css';
import './datepicker.scss';
import $ from 'jquery';

$('.datepicker__content').datepicker({
  minDate: new Date(),
  range: true,
  navTitles: {
    days: 'MM <i>yyyy</i>',
    months: 'yyyy',
    years: 'yyyy1 - yyyy2',
  },
  dateFormat: 'dd.mm.yyyy',
});

const myDatepickers = [];

$('.datepicker__content').each((i) => {
  myDatepickers[i] = $('.datepicker__content').eq(i).datepicker().data('datepicker');
});
const $clear = $('.datepicker__clear');
$('.datepicker__set').each((i) => {
  $('.datepicker__set').eq(i).click((evt) => {
    evt.preventDefault();
  });
});
$clear.each((i) => {
  $clear.eq(i).click((evt) => {
    evt.preventDefault();
    myDatepickers[i].clear();
    $clear.eq(i).css({ display: 'none' });
  });
});
$('.datepicker__container').each(function (i) {
  $(this).mouseup(() => {
    if (myDatepickers[i].selectedDates.length === 0) {
      $clear.eq(i).css({ display: 'none' });
    } else {
      $clear.eq(i).css({ display: 'block' });
    }
  });
});
