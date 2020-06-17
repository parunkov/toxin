import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../components/page/page';
import '../../components/header/header';
import '../../components/input/input';
import '../../components/dropdown/dropdown';
import '../../components/slider/slider';
import '../../components/checkbox/checkbox';
import '../../components/card/card';
import '../../components/footer/footer';
import '../../components/datepicker-block/datepicker-block';
import '../../components/pagination/pagination';
import './search-room.scss';
import $ from 'jquery';

$('.search-room__input-wrapper .input__field').attr('disabled', '');

$('.search-room__filters-title').click((evt) => {
  evt.preventDefault();
  $('.search-room__form').toggleClass('d-block');
  $('.search-room__filters-title').toggleClass('search-room__filters-title_rotate');
});

$('.search-room__expandable-title').click((evt) => {
  evt.preventDefault();
  $('.search-room__expandable-text').toggleClass('d-none');
  $('.search-room__expandable-title').toggleClass('search-room__expandable-title_rotate');
});

$('.search-room__checkbox-wrapper .checkbox__input:gt(0)').prop('checked', true);
$('.search-room__expandable-wrapper .checkbox__input:lt(4)').prop('checked', true);
$('.search-room__expandable-wrapper .checkbox__input').eq(0).prop('checked', false);

$(document).ready(() => {
  const $button1 = $('.search-room__peoples-dropdown-wrapper .dropdown__wrapper button');
  const $button2 = $('.search-room__room-dropdown-wrapper .dropdown__wrapper button');

  $button1.eq(1).trigger('click');
  $button1.eq(3).trigger('click');
  $button1.eq(5).trigger('click');
  $('.search-room__peoples-dropdown-wrapper .dropdown__set-btn').trigger('click');
  $button2.eq(1).trigger('click');
  $button2.eq(1).trigger('click');
  $button2.eq(3).trigger('click');
  $button2.eq(3).trigger('click');


  $('.search-room__input-wrapper i').removeClass('input__button').addClass('search-room__input-icon');
  const $icon = $('.search-room__input-icon');
  $icon.each((i) => {
    $icon.eq(i).click(() => {
      if ($icon.eq(i).text() === 'expand_more') {
        $icon.eq(i).text('expand_more');
      } else if ($icon.eq(i).text() === 'expand_less') {
        $icon.eq(i).text('expand_more');
      }
    });
});
});
