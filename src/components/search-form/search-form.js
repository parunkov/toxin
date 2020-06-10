import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../input/input';
import '../dropdown/dropdown';
import '../btn/btn';
import '../datepicker-block/datepicker-block';
import './search-form.scss';
import $ from 'jquery';

const $myDatepicker = $('.search-form__datepicker-container .datepicker-block__content').datepicker().data('datepicker');
const $datepickerContainer = $('.search-form__datepicker-container');
const $setBtn = $('.search-form__datepicker-container .datepicker-block__set-btn');
const $clearBtn = $('.search-form__datepicker-container .datepicker-block__clear-btn');
const $arrival = $('.search-form__arrival-wrapper .input__field');
const $departure = $('.search-form__departure-wrapper .input__field');

const $icon = $('.search-form__inputs-wrapper .input__icon');
console.log($icon);
const $iconText = $('.search-form__inputs-wrapper .input__icon');

const dateToValue = (date) => `${(`0${date.getDate()}`).substr(-2)}.${(`0${date.getMonth() + 1}`).substr(-2)}.${date.getFullYear()}`;

$arrival.attr('disabled', '');
$departure.attr('disabled', '');

$('.search-form .input__icon').click(function (evt) {
  evt.preventDefault();
  if ($datepickerContainer.css('display') === 'block' && $(this).text() === 'expand_more') {
    $datepickerContainer.css({ display: 'none' });
    $iconText.text('expand_more');
    $(this).text('expand_more');
    $icon.css({ cursor: 'pointer' });
  } else if ($datepickerContainer.css('display') === 'block' && $(this).text() === 'expand_less') {
    $(this).text('expand_more');
  } else if ($datepickerContainer.css('display') === 'none' && $(this).text() === 'expand_less') {
    $datepickerContainer.css({ display: 'block' });
    $iconText.text('expand_more');
    $icon.css({ cursor: 'default' });
    $(this).text('expand_less');
    $(this).css({ cursor: 'pointer' });
  }
  $setBtn.click((e) => {
    e.preventDefault();
    $datepickerContainer.css({ display: 'none' });
    $icon.css({ cursor: 'pointer' });
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
