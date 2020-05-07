import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../components/page/page';
import '../../components/page_header/page_header';
import '../../components/input/input';
import '../../components/dropdown/dropdown';
import '../../components/slider/slider';
import '../../components/checkbox/checkbox';
import '../../components/card/card';
import '../../components/page_footer/page_footer';
import '../../components/datepicker/datepicker';
import '../../components/pagination/pagination';
import './search_room.scss';
import $ from 'jquery';

const $myDatepicker = $('.search_room__datepicker-container .datepicker__content').datepicker().data('datepicker');
const $datepickerContainer = $('.search_room__datepicker-container');
const $setBtn = $('.search_room__datepicker-container .datepicker__set');
const $input = $('.search_room__input');
const $input1 = $('.search_room__input-1');
const months = [
  'янв', 'фев', 'мар', 'апр', 'май', 'июн',
  'июл', 'авг', 'сен', 'окт', 'ноя', 'дек',
];
const dateToValue = (date) => (`${(`0${date.getDate()}`).substr(-2)} ${months[date.getMonth()]}`);

// $('.search_room__input-1').attr('disabled', '');

$('.search_room__container .input__icon').click((evt) => {
  evt.preventDefault();
  // $datepickerContainer.css({'display' : 'block'});
  if ($datepickerContainer.css('display') === 'block') {
    $datepickerContainer.css({ display: 'none' });
    $('.input__icon-text').text('expand_more');
  } else {
    $datepickerContainer.css({ display: 'block' });
    $('.input__icon-text').text('expand_less');
  }
  $setBtn.click((e) => {
    e.preventDefault();
    $datepickerContainer.css({ display: 'none' });
    $('.input__icon-text').text('expand_more');
    if ($myDatepicker.selectedDates[0]) {
      $input1.attr('value', dateToValue($myDatepicker.selectedDates[0]));
    } else {
      $input1.attr('value', '');
    }
    if ($myDatepicker.selectedDates[1]) {
      $input1.attr('value', `${dateToValue($myDatepicker.selectedDates[0])} - ${dateToValue($myDatepicker.selectedDates[1])}`);
    }
  });
});

$('.search_room__filters-h3').click((evt) => {
  evt.preventDefault();
  $('.search_room__form').toggleClass('d-block');
  $('.search_room__filters-h3').toggleClass('search_room__filters-h3--rotate');
});

$('.search_room__expandable-h3').click((evt) => {
  evt.preventDefault();
  $('.search_room__expandable-text').toggleClass('d-none');
  $('.search_room__expandable-h3').toggleClass('search_room__expandable-h3--rotate');
});

$('.search_room__checkbox-1:gt(0)').prop('checked', true);
$('.search_room__checkbox-3:lt(4)').prop('checked', true);
$('.search_room__checkbox-3').eq(0).prop('checked', false);

$(document).ready(() => {
  const $button1 = $('.search_room__dropdown-wrap .iqdropdown button');
  const $button2 = $('.search_room__dropdown-2-wrap .iqdropdown button');

  $button1.eq(1).trigger('click');
  $button1.eq(3).trigger('click');
  $button1.eq(5).trigger('click');
  $('.search_room__dropdown-wrap .dropdown__set').trigger('click');
  $button2.eq(1).trigger('click');
  $button2.eq(1).trigger('click');
  $button2.eq(3).trigger('click');
  $button2.eq(3).trigger('click');

  // $('.search_room__card-wrap').eq(0).click((evt) => {
  //   evt.preventDefault();
  //   const { classList } = evt.target;
  //   const contains = function (arr, elem) {
  //     for (let i = 0; i < arr.length; i += 1) {
  //       if (arr[i] === elem) {
  //         return true;
  //       }
  //     }
  //     return false;
  //   };
  //   if (!(contains(classList, 'card__arrow-right') || contains(classList, 'card__arrow-left') || contains(classList, 'card__control'))) {
  //     window.location.href = 'room_details.html';
  //   }
  // });
});
