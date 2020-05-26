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
import '../../components/datepicker/datepicker';
import '../../components/pagination/pagination';
import './search-room.scss';
import $ from 'jquery';

$('.search-room__input-wrapper .input__input').attr('disabled', '');

$('.search-room__filters-header').click((evt) => {
  evt.preventDefault();
  $('.search-room__form').toggleClass('d-block');
  $('.search-room__filters-header').toggleClass('search-room__filters-header_rotate');
});

$('.search-room__expandable-header').click((evt) => {
  evt.preventDefault();
  $('.search-room__expandable-text').toggleClass('d-none');
  $('.search-room__expandable-header').toggleClass('search-room__expandable-header_rotate');
});

$('.search-room__checkbox-wrapper .checkbox__input:gt(0)').prop('checked', true);
$('.search-room__expandable-wrapper .checkbox__input:lt(4)').prop('checked', true);
$('.search-room__expandable-wrapper .checkbox__input').eq(0).prop('checked', false);

$(document).ready(() => {
  const $button1 = $('.search-room__dropdown-wrapper .iqdropdown button');
  const $button2 = $('.search-room__dropdown-2-wrapper .iqdropdown button');

  $button1.eq(1).trigger('click');
  $button1.eq(3).trigger('click');
  $button1.eq(5).trigger('click');
  $('.search-room__dropdown-wrapper .dropdown__set-btn').trigger('click');
  $button2.eq(1).trigger('click');
  $button2.eq(1).trigger('click');
  $button2.eq(3).trigger('click');
  $button2.eq(3).trigger('click');

  $('.search-room__input-wrapper i').removeClass('input__icon-text').addClass('search-room__input-icon-text');
});
