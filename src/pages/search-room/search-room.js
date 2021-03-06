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
import $ from 'jquery';
import '../../components/page/page';
import '../../components/header/header';
import '../../components/input/input';
import Dropdown from '../../components/dropdown/dropdown';
import '../../components/range-slider/range-slider';
import '../../components/checkbox-list/checkbox-list';
import Card from '../../components/room-card/room-card';
import '../../components/footer/footer';
import '../../components/pagination/pagination';
import '../../components/filter-date-dropdown/filter-date-dropdown';
import '../../components/expandable-checkbox-list/expandable-checkbox-list';
import './search-room.scss';


const $dropdowns = [];
$('.js-dropdown').each((i) => {
  $dropdowns[i] = new Dropdown($('.js-dropdown').eq(i));
});

const cards = [];
$('.js-room-card').each((i) => {
  cards[i] = new Card($('.js-room-card').eq(i));
});

$('.js-search-room__aside-title').click((evt) => {
  evt.preventDefault();
  $('.js-search-room__form').toggleClass('search-room__form_visible');
  $('.js-search-room__aside-title').toggleClass('js-search-room__aside-title_rotate');
});

$('.js-search-room__checkbox .js-checkbox__input:gt(0)').prop('checked', true);
$('.search-room__expandable-list .js-checkbox__input:lt(4)').prop('checked', true);
$('.search-room__expandable-list .js-checkbox__input').eq(0).prop('checked', false);

$(document).ready(() => {
  const $button1 = $('.js-search-room__peoples-dropdown .js-dropdown__inner button');
  const $button2 = $('.js-search-room__room-dropdown .js-dropdown__inner button');

  $button1.eq(1).trigger('click');
  $button1.eq(3).trigger('click');
  $button1.eq(5).trigger('click');
  $('.js-search-room__peoples-dropdown .js-dropdown__set-button').trigger('click');
  $button2.eq(1).trigger('click');
  $button2.eq(1).trigger('click');
  $button2.eq(3).trigger('click');
  $button2.eq(3).trigger('click');
});
