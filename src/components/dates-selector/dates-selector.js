import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../input/input';
import '../dropdown/dropdown';
import '../datepicker-block/datepicker-block';
import './dates-selector.scss';
import $ from 'jquery';

const $myDatepicker = $('.dates-selector__datepicker-container .datepicker-block__content').datepicker().data('datepicker');
const $datepickerContainer = $('.dates-selector__datepicker-container');
const $setBtn = $('.dates-selector__datepicker-container .datepicker-block__set-btn');
const $clearBtn = $('.dates-selector__datepicker-container .datepicker-block__clear-btn');
const $arrival = $('.dates-selector__arrival-wrapper .input__field');
const $departure = $('.dates-selector__departure-wrapper .input__field');

const $icon = $('.dates-selector__inputs-wrapper .input__button');
console.log($icon);
const $iconText = $('.dates-selector__inputs-wrapper .input__button');

const dateToValue = (date) => `${(`0${date.getDate()}`).substr(-2)}.${(`0${date.getMonth() + 1}`).substr(-2)}.${date.getFullYear()}`;

$arrival.attr('disabled', '');
$departure.attr('disabled', '');

$('.dates-selector .input__button').click(function (evt) {
  evt.preventDefault();
  if ($datepickerContainer.hasClass('dates-selector__datepicker-container_visible') && $(this).text() === 'expand_more') {
    $datepickerContainer.removeClass('dates-selector__datepicker-container_visible');
    $iconText.text('expand_more');
    $(this).text('expand_more');
    $icon.removeClass('input__button_cursor_default');
  } else if ($datepickerContainer.hasClass('dates-selector__datepicker-container_visible') && $(this).text() === 'expand_less') {
    $(this).text('expand_more');
  } else if (!$datepickerContainer.hasClass('dates-selector__datepicker-container_visible') && $(this).text() === 'expand_less') {
    $datepickerContainer.addClass('dates-selector__datepicker-container_visible');
    $iconText.text('expand_more');
    $icon.addClass('input__button_cursor_default');
    $(this).text('expand_less');
    $(this).removeClass('input__button_cursor_default');
  }
  $setBtn.click((e) => {
    e.preventDefault();
    $datepickerContainer.removeClass('dates-selector__datepicker-container_visible');
    $icon.removeClass('input__button_cursor_default');
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

