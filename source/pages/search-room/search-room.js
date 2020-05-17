import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../components/page/page';
import '../../components/page-header/page-header';
import '../../components/input/input';
import '../../components/dropdown/dropdown';
import '../../components/slider/slider';
import '../../components/checkbox/checkbox';
import '../../components/card/card';
import '../../components/page-footer/page-footer';
import '../../components/datepicker/datepicker';
import '../../components/pagination/pagination';
import './search-room.scss';
import $ from 'jquery';

$('.search-room__filters-h3').click((evt) => {
  evt.preventDefault();
  $('.search-room__form').toggleClass('d-block');
  $('.search-room__filters-h3').toggleClass('search-room__filters-h3_rotate');
});

$('.search-room__expandable-h3').click((evt) => {
  evt.preventDefault();
  $('.search-room__expandable-text').toggleClass('d-none');
  $('.search-room__expandable-h3').toggleClass('search-room__expandable-h3_rotate');
});

$('.search-room__checkbox-1:gt(0)').prop('checked', true);
$('.search-room__checkbox-3:lt(4)').prop('checked', true);
$('.search-room__checkbox-3').eq(0).prop('checked', false);

$(document).ready(() => {
  const $button1 = $('.search-room__dropdown-wrap .iqdropdown button');
  const $button2 = $('.search-room__dropdown-2-wrap .iqdropdown button');

  $button1.eq(1).trigger('click');
  $button1.eq(3).trigger('click');
  $button1.eq(5).trigger('click');
  $('.search-room__dropdown-wrap .dropdown__set').trigger('click');
  $button2.eq(1).trigger('click');
  $button2.eq(1).trigger('click');
  $button2.eq(3).trigger('click');
  $button2.eq(3).trigger('click');

  $('.search-room__input-wrap i').removeClass('input__icon-text').addClass('search-room__input-icon-text');
});