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
import Dropdown from '../../components/dropdown/dropdown';
import Rate from '../../components/rate/rate';

const $dropdowns = [];
$('.js-dropdown').each((i) =>{
  $dropdowns[i] = new Dropdown($('.js-dropdown').eq(i));
});

const rates = [];
$('.js-rate').each((i) => {
  rates[i] = new Rate($('.js-rate').eq(i));
});

$('.js-form-elements__section:nth-child(2) .js-form-elements__item:nth-child(1) .checkbox__input:gt(0)').prop('checked', true);
$('.js-form-elements__section:nth-child(2) .js-form-elements__item:nth-child(3) .js-toggle__input').eq(0).prop('checked', true);
$('.js-like__input').eq(1).prop('checked', true);
$('.js-form-elements__section:nth-child(5) .js-form-elements__item:nth-child(2) .checkbox__input:lt(4)').prop('checked', true);
$('.js-form-elements__section:nth-child(5) .js-form-elements__item:nth-child(2) .checkbox__input').eq(0).prop('checked', false);
$('.js-like__input').eq(2).prop('checked', true);
$(document).ready(() => {

  const $button = $('.js-form-elements__section:nth-child(8) .js-form-elements__item .js-dropdown__wrapper button');
  $button.eq(2).trigger('click');
  $button.eq(2).trigger('click');
  $button.eq(4).trigger('click');
  $button.eq(7).trigger('click');
  $('.js-form-elements__section:nth-child(8) .js-dropdown__arrow').trigger('click');

  const $roomDropdown = $('.js-dropdown');
  for (let i = 0; i < 2; i += 1) {
    const $dropdownBtn = $roomDropdown.eq(i).find('.js-dropdown__counter-button_theme_increment');
    for (let j = 0; j < 2; j += 1) {
      $dropdownBtn.eq(j).trigger('click');
      $dropdownBtn.eq(j).trigger('click');
    }
  }

  const $js_dropdown__wrapper = $('.js-dropdown:not(.js-dropdown_theme_date)').find('.js-dropdown__wrapper');
  for (let i = 1; i < 4 ; i += 1) {
    $js_dropdown__wrapper.eq(i).find('.js-dropdown__arrow').text('expand_less');
    $js_dropdown__wrapper.eq(i).addClass('js-dropdown__wrapper_expanded');
  }

    $('.js-form-elements__section:nth-child(3) .js-form-elements__item:nth-child(3)').bind('DOMSubtreeModified', () => {
    const $paginationPage = $('.paginationjs-page');
    $paginationPage.removeClass('paginationjs-page_size_small');
    if ($paginationPage.length > 4) {
      $paginationPage.addClass('paginationjs-page_size_small');
    }
  });
});
