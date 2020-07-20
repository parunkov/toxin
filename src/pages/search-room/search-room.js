import './images/image1.jpg';
import './images/image2.jpg';
import './images/image3.jpg';
import './images/image4.jpg';
import './images/image5.jpg';
import './images/image6.jpg';
import './images/image7.jpg';
import './images/image8.jpg';
import './images/image9.jpg';
import './images/image10.jpg';
import './images/image11.jpg';
import './images/image12.jpg';
import './images/image13.jpg';
import './images/image14.jpg';
import './images/image15.jpg';
import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../components/page/page';
import '../../components/header/header';
import '../../components/input/input';
import '../../components/dropdown/dropdown';
import '../../components/slider/slider';
import '../../components/checkbox-list/checkbox-list';
import '../../components/card/card';
import '../../components/footer/footer';
import '../../components/datepicker-block/datepicker-block';
import '../../components/pagination/pagination';
import '../../components/dates-filter/dates-filter';
import './search-room.scss';
import $ from 'jquery';
import Datepicker from '../../components/datepicker-block/datepicker-block';
import Dropdown from '../../components/dropdown/dropdown';
import Card from '../../components/card/card';

const $dropdowns = [];
$('.js-dropdown').each((i) =>{
  $dropdowns[i] = new Dropdown($('.js-dropdown').eq(i));
});

const cards = [];
$('.js-card').each((i) => {
  cards[i] = new Card($('.js-card').eq(i));
});

$('.js-search-room__aside-title').click((evt) => {
  evt.preventDefault();
  $('.js-search-room__form').toggleClass('d-block');
  $('.js-search-room__aside-title').toggleClass('js-search-room__aside-title_rotate');
});

$('.js-search-room__expandable-title').click((evt) => {
  evt.preventDefault();
  $('.js-search-room__expandable-text').toggleClass('d-none');
  $('.js-search-room__expandable-title').toggleClass('js-search-room__expandable-title_rotate');
});

$('.js-search-room__checkbox-wrapper .js-checkbox-list__input:gt(0)').prop('checked', true);
$('.search-room__expandable-wrapper .js-checkbox-list__input:lt(4)').prop('checked', true);
$('.search-room__expandable-wrapper .js-checkbox-list__input').eq(0).prop('checked', false);

$(document).ready(() => {
  const $button1 = $('.js-search-room__peoples-dropdown-wrapper .js-dropdown__wrapper button');
  const $button2 = $('.js-search-room__room-dropdown-wrapper .js-dropdown__wrapper button');

  $button1.eq(1).trigger('click');
  $button1.eq(3).trigger('click');
  $button1.eq(5).trigger('click');
  $('.js-search-room__peoples-dropdown-wrapper .js-dropdown__set-btn').trigger('click');
  $button2.eq(1).trigger('click');
  $button2.eq(1).trigger('click');
  $button2.eq(3).trigger('click');
  $button2.eq(3).trigger('click');
});


