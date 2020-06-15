import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../input/input';
import '../dropdown/dropdown';
import '../datepicker-block/datepicker-block';
import './dates-block.scss';
import $ from 'jquery';

const $myDatepicker = $('.dates-block__datepicker-container .datepicker-block__content').datepicker().data('datepicker');
const $datepickerContainer = $('.dates-block__datepicker-container');
const $setBtn = $('.dates-block__datepicker-container .datepicker-block__set-btn');
const $clearBtn = $('.dates-block__datepicker-container .datepicker-block__clear-btn');
const $arrival = $('.dates-block__arrival-wrapper .input__field');
const $departure = $('.dates-block__departure-wrapper .input__field');

const $icon = $('.dates-block__inputs-wrapper .input__icon');
console.log($icon);
const $iconText = $('.dates-block__inputs-wrapper .input__icon');

const dateToValue = (date) => `${(`0${date.getDate()}`).substr(-2)}.${(`0${date.getMonth() + 1}`).substr(-2)}.${date.getFullYear()}`;

$arrival.attr('disabled', '');
$departure.attr('disabled', '');

$('.dates-block .input__icon').click(function (evt) {
  evt.preventDefault();
  if ($datepickerContainer.hasClass('dates-block__datepicker-container_visible') && $(this).text() === 'expand_more') {
    $datepickerContainer.removeClass('dates-block__datepicker-container_visible');
    $iconText.text('expand_more');
    $(this).text('expand_more');
    $icon.css({ cursor: 'pointer' });
  } else if ($datepickerContainer.hasClass('dates-block__datepicker-container_visible') && $(this).text() === 'expand_less') {
    $(this).text('expand_more');
  } else if (!$datepickerContainer.hasClass('dates-block__datepicker-container_visible') && $(this).text() === 'expand_less') {
    $datepickerContainer.addClass('dates-block__datepicker-container_visible');
    $iconText.text('expand_more');
    $icon.css({ cursor: 'default' });
    $(this).text('expand_less');
    $(this).css({ cursor: 'pointer' });
  }
  $setBtn.click((e) => {
    e.preventDefault();
    $datepickerContainer.removeClass('dates-block__datepicker-container_visible');
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

