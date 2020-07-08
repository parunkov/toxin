import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../components/page/page';
import '../../components/ui-kit/ui-kit';
import '../../components/input/input';
import '../../components/checkbox/checkbox';
import '../../components/radio/radio';
import '../../components/toggle/toggle';
import '../../components/like/like';
import '../../components/rate/rate';
import '../../components/slider/slider';
import '../../components/btn/btn';
import '../../components/pagination/pagination';
import '../../components/dropdown/dropdown';
import '../../components/info/info';
import '../../components/review/review';
import './form-elements.scss';
import $ from 'jquery';

const dropdownTexts = {
  type: 'спальни',
  value1:'0 спален, 0 кроватей, 0 ванных',
  placeholder1: 'Выберите удобства',
  placeholder2: 'дд.мм.гггг',
  placeholder3: 'Сколько гостей',
  variants1: ['спальня', 'спальни', 'спален'],
  variants2: ['ванная', 'ванные', 'ванных'],
  variants3: ['младенец', 'младенца', 'младенцев'],
  variants4: ['кровать', 'кровати', 'кроватей'],
  variants5: ['гость', 'гостя', 'гостей']
}

$('.form-elements__section:nth-child(2) .form-elements__item:nth-child(1) .checkbox__input:gt(0)').prop('checked', true);
$('.form-elements__section:nth-child(2) .form-elements__item:nth-child(3) .toggle__input').eq(0).prop('checked', true);
$('.like__input').eq(1).prop('checked', true);
$('.form-elements__section:nth-child(5) .form-elements__item:nth-child(2) .checkbox__input:lt(4)').prop('checked', true);
$('.form-elements__section:nth-child(5) .form-elements__item:nth-child(2) .checkbox__input').eq(0).prop('checked', false);
$('.like__input').eq(2).prop('checked', true);
$(document).ready(() => {

  const $button = $('.form-elements__section:nth-child(8) .form-elements__item .dropdown__wrapper button');
  console.log($button);
  $button.eq(2).trigger('click');
  $button.eq(2).trigger('click');
  $button.eq(4).trigger('click');
  $button.eq(7).trigger('click');
  $('.form-elements__section:nth-child(8) .dropdown__arrow').trigger('click');

  const $roomDropdown = $('.dropdown');
  for (let i = 0; i < 2; i += 1) {
    const $dropdownBtn = $roomDropdown.eq(i).find('.dropdown__counter-button_theme_increment');
    for (let j = 0; j < 2; j += 1) {
      $dropdownBtn.eq(j).trigger('click');
      $dropdownBtn.eq(j).trigger('click');
    }
  }

  const $dropdown__wrapper = $('.dropdown:not(.dropdown_theme_date)').find('.dropdown__wrapper');
  for (let i = 1; i < 4 ; i += 1) {
    $dropdown__wrapper.eq(i).find('.dropdown__arrow').text('expand_less');
    $dropdown__wrapper.eq(i).addClass('dropdown__wrapper_expanded');
  }

    $('.form-elements__section:nth-child(3) .form-elements__item:nth-child(3)').bind('DOMSubtreeModified', () => {
    const $paginationPage = $('.paginationjs-page');
    $paginationPage.removeClass('paginationjs-page_size_small');
    if ($paginationPage.length > 4) {
      $paginationPage.addClass('paginationjs-page_size_small');
    }
  });
});

export {dropdownTexts};
