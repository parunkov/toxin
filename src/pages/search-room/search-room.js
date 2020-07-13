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
import '../../components/checkbox/checkbox';
import '../../components/card/card';
import '../../components/footer/footer';
import '../../components/datepicker-block/datepicker-block';
import '../../components/pagination/pagination';
import './search-room.scss';
import $ from 'jquery';
import Datepicker from '../../components/datepicker-block/datepicker-block';
import Dropdown from '../../components/dropdown/dropdown';
import Card from '../../components/card/card';

const $dropdowns = [];
$('.dropdown').each((i) =>{
  $dropdowns[i] = new Dropdown($('.dropdown').eq(i));
});

const cards = [];
$('.card').each((i) => {
  cards[i] = new Card($('.card').eq(i));
});

$('.search-room__input-wrapper .input__field').attr('disabled', '');

$('.search-room__aside-title').click((evt) => {
  evt.preventDefault();
  $('.search-room__form').toggleClass('d-block');
  $('.search-room__aside-title').toggleClass('search-room__aside-title_rotate');
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
  const $button1 = $('.search-room__peoples-dropdown-wrapper .js-dropdown__wrapper button');
  const $button2 = $('.search-room__room-dropdown-wrapper .js-dropdown__wrapper button');

  $button1.eq(1).trigger('click');
  $button1.eq(3).trigger('click');
  $button1.eq(5).trigger('click');
  $('.search-room__peoples-dropdown-wrapper .dropdown__set-btn').trigger('click');
  $button2.eq(1).trigger('click');
  $button2.eq(1).trigger('click');
  $button2.eq(3).trigger('click');
  $button2.eq(3).trigger('click');


  const $input1 = $('.input__field').eq(0);
  const $icon = $('.input__button').eq(0);
  const datepicker = new Datepicker($('.datepicker-block'));
  const $datepickerContainer = $('.search-room__datepicker-container');
  const months = [
    'янв', 'фев', 'мар', 'апр', 'май', 'июн',
    'июл', 'авг', 'сен', 'окт', 'ноя', 'дек',
  ];
  const dateToValue = (date) => (`${(`0${date.getDate()}`).substr(-2)} ${months[date.getMonth()]}`);
  $icon.click(() => {
    $datepickerContainer.toggleClass('search-room__datepicker-container_visible');
  });
  datepicker.$setBtn.click((e) => {
    e.preventDefault();
    $datepickerContainer.removeClass('search-room__datepicker-container_visible');
    $icon.text('expand_more');
    const dates = datepicker.dates.selectedDates;
    if (dates[1]) {
      $input1.attr('value', `${dateToValue(dates[0])} - ${dateToValue(dates[1])}`);
    } else {
      $input1.attr('value', '');
    }
  });
  datepicker.$clearBtn.click(() => {
    $input1.attr('value', '');
  });

});

