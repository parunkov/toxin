import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../input/input';
import '../dropdown/dropdown';
import '../datepicker-block/datepicker-block';
import './inputs-block.scss';
import $ from 'jquery';

const $myDatepicker = $('.inputs-block__datepicker-container .datepicker-block__content').datepicker().data('datepicker');
const $datepickerContainer = $('.inputs-block__datepicker-container');
const $setBtn = $('.inputs-block__datepicker-container .datepicker-block__set-btn');
const $clearBtn = $('.inputs-block__datepicker-container .datepicker-block__clear-btn');
const $arrival = $('.inputs-block__arrival-wrapper .input__field');
const $departure = $('.inputs-block__departure-wrapper .input__field');

const $icon = $('.inputs-block__inputs-wrapper .input__icon');
console.log($icon);
const $iconText = $('.inputs-block__inputs-wrapper .input__icon');

const dateToValue = (date) => `${(`0${date.getDate()}`).substr(-2)}.${(`0${date.getMonth() + 1}`).substr(-2)}.${date.getFullYear()}`;

$arrival.attr('disabled', '');
$departure.attr('disabled', '');

$('.inputs-block .input__icon').click(function (evt) {
  evt.preventDefault();
  if ($datepickerContainer.hasClass('inputs-block__datepicker-container_visible') && $(this).text() === 'expand_more') {
    $datepickerContainer.removeClass('inputs-block__datepicker-container_visible');
    $iconText.text('expand_more');
    $(this).text('expand_more');
    $icon.css({ cursor: 'pointer' });
  } else if ($datepickerContainer.hasClass('inputs-block__datepicker-container_visible') && $(this).text() === 'expand_less') {
    $(this).text('expand_more');
  } else if (!$datepickerContainer.hasClass('inputs-block__datepicker-container_visible') && $(this).text() === 'expand_less') {
    $datepickerContainer.addClass('inputs-block__datepicker-container_visible');
    $iconText.text('expand_more');
    $icon.css({ cursor: 'default' });
    $(this).text('expand_less');
    $(this).css({ cursor: 'pointer' });
  }
  $setBtn.click((e) => {
    e.preventDefault();
    $datepickerContainer.removeClass('inputs-block__datepicker-container_visible');
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

