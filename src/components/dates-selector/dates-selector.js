import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../input/input';
import '../dropdown/dropdown';
import '../datepicker-block/datepicker-block';
import './dates-selector.scss';
import $ from 'jquery';

$(document).ready(() => {
  const $datesSelector = $('.dates-selector');

  $datesSelector.each((i) => {

    const $myDatepicker = $datesSelector.eq(i).find('.dates-selector__datepicker .datepicker-block__content').datepicker().data('datepicker');
    const $datepickerContainer = $datesSelector.eq(i).find('.dates-selector__datepicker');
    const $setBtn = $datesSelector.eq(i).find('.dates-selector__datepicker .datepicker-block__set-btn');
    const $clearBtn = $datesSelector.eq(i).find('.dates-selector__datepicker .datepicker-block__clear-btn');
    const $arrival = $datesSelector.eq(i).find('.dropdown_theme_date:first-child .dropdown__input');
    const $departure = $datesSelector.eq(i).find('.dropdown_theme_date:nth-child(2) .dropdown__input');
    const $icon = $datesSelector.eq(i).find('.dropdown_theme_date .dropdown__arrow');

    const dateToValue = (date) => `${(`0${date.getDate()}`).substr(-2)}.${(`0${date.getMonth() + 1}`).substr(-2)}.${date.getFullYear()}`;

    $arrival.attr('disabled', '');
    $departure.attr('disabled', '');

    $icon.click(function (evt) {
      evt.preventDefault();
      if ($datepickerContainer.hasClass('dates-selector__datepicker_visible') && $(this).text() === 'expand_more') {
        $icon.text('expand_less');
        $(this).text('expand_more');
      } else if ($datepickerContainer.hasClass('dates-selector__datepicker_visible') && $(this).text() === 'expand_less') {
        $(this).text('expand_more');
        $datepickerContainer.removeClass('dates-selector__datepicker_visible');
        $icon.removeClass('dropdown__arrow_cursor_default');
      } else if (!$datepickerContainer.hasClass('dates-selector__datepicker_visible') && $(this).text() === 'expand_less') {
        $datepickerContainer.addClass('dates-selector__datepicker_visible');
        $icon.text('expand_more');
        $(this).text('expand_less');
        $(this).removeClass('dropdown__arrow_cursor_default');
      } else {
        $datepickerContainer.addClass('dates-selector__datepicker_visible');
        $icon.text('expand_more');
        $icon.addClass('dropdown__arrow_cursor_default');
        $(this).text('expand_less');
        $(this).removeClass('dropdown__arrow_cursor_default');
      }

      $setBtn.click((e) => {
        e.preventDefault();
        $datepickerContainer.removeClass('dates-selector__datepicker_visible');
        $icon.removeClass('dropdown__arrow_cursor_default');
        $icon.text('expand_more');
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
  });  

});