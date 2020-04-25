import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../input/input';
import '../dropdown/dropdown';
import '../btn/btn';
import '../datepicker/datepicker';
import './search.scss';

const $myDatepicker = $('.search__datepicker-container .datepicker__content').datepicker().data('datepicker');
const $datepickerContainer = $('.search__datepicker-container');
const $setBtn = $('.search__datepicker-container .datepicker__set');
const $clearBtn = $('.search__datepicker-container .datepicker__clear');
const $arrival = $('.search__input-1');
const $departure = $('.search__input-2');

const $icon = $('.search__input-wrap .input__icon');
const $iconText = $('.search__input-wrap .input__icon-text');

const dateToValue = (date) => `${(`0${date.getDate()}`).substr(-2)}.${(`0${date.getMonth() + 1}`).substr(-2)}.${date.getFullYear()}`;

$setBtn.click(() => {
  // $('.input__icon-text').text('expand_more');
});

$('.search__container .input__icon').click(function (evt) {
  evt.preventDefault();
  if ($datepickerContainer.css('display') === 'block' && $(this).find('.input__icon-text').text() === 'expand_more') {
    $datepickerContainer.css({ display: 'none' });
    $iconText.text('expand_more');
    $(this).find('.input__icon-text').text('expand_more');
    $icon.css({ cursor: 'pointer' });
  } else if ($datepickerContainer.css('display') === 'block' && $(this).find('.input__icon-text').text() === 'expand_less') {
    $(this).find('.input__icon-text').text('expand_more');
  } else if ($datepickerContainer.css('display') === 'none' && $(this).find('.input__icon-text').text() === 'expand_less') {
    $datepickerContainer.css({ display: 'block' });
    $iconText.text('expand_more');
    $icon.css({ cursor: 'default' });
    $(this).find('.input__icon-text').text('expand_less');
    $(this).css({ cursor: 'pointer' });
  }
  $setBtn.click((e) => {
    e.preventDefault();
    $datepickerContainer.css({ display: 'none' });
    $iconText.text('expand_more');
    if ($myDatepicker.selectedDates[0]) {
      $arrival.attr('value', dateToValue($myDatepicker.selectedDates[0]));
    } else {
      $arrival.attr('value', '');
    }
    if ($myDatepicker.selectedDates[1]) {
      $departure.attr('value', dateToValue($myDatepicker.selectedDates[1]));
    } else {
      $departure.attr('value', '');
    }
  });
  $clearBtn.click((e) => {
    e.preventDefault();
    $arrival.attr('value', '');
    $departure.attr('value', '');
  });
});
