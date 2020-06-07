import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../input/input';
import '../dropdown/dropdown';
import '../btn/btn';
import './reservation-form.scss';
import '../datepicker/datepicker';
import $ from 'jquery';

const $button = $('.reservation-form .iqdropdown button');

$(document).ready(() => {
  $button.eq(1).trigger('click');
  $button.eq(1).trigger('click');
  $button.eq(3).trigger('click');
  $('.reservation-form .dropdown__set-btn').trigger('click');
  $('.reservation-form .iqdropdown').removeClass('menu-open');
});

const $myDatepicker = $('.reservation-form__datepicker-container .datepicker__content').datepicker().data('datepicker');
const $datepickerContainer = $('.reservation-form__datepicker-container');
const $setBtn = $('.reservation-form__datepicker-container .datepicker__set-btn');
const $clearBtn = $('.reservation-form__datepicker-container .datepicker__clear-btn');
const $arrival = $('.reservation-form__input-wrapper_left .input__field');
const $departure = $('.reservation-form__input-wrapper_right .input__field');

const $icon = $('.reservation-form__input-wrapper .input__icon');
const $iconText = $('.reservation-form__input-wrapper .input__icon');

const dateToValue = (date) => `${(`0${date.getDate()}`).substr(-2)}.${(`0${date.getMonth() + 1}`).substr(-2)}.${date.getFullYear()}`;

$arrival.attr('disabled', '');
$departure.attr('disabled', '');

$('.reservation-form .input__icon').click(function (evt) {
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
