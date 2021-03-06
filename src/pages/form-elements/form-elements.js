import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../components/page/page';
import '../../components/ui-kit/ui-kit';
import '../../components/input/input';
import '../../components/checkbox-list/checkbox-list';
import '../../components/radio/radio';
import '../../components/toggle/toggle';
import '../../components/like/like';
import $ from 'jquery';
import Rate from '../../components/rate/rate';
import '../../components/range-slider/range-slider';
import '../../components/button/button';
import '../../components/pagination/pagination';
import Dropdown from '../../components/dropdown/dropdown';
import '../../components/info/info';
import '../../components/review/review';
import DatesSelector from '../../components/dates-selector/dates-selector';
import '../../components/filter-date-dropdown/filter-date-dropdown';
import '../../components/expandable-checkbox-list/expandable-checkbox-list';
import './form-elements.scss';


const $dropdowns = [];
$('.js-dropdown').each((i) => {
  $dropdowns[i] = new Dropdown($('.js-dropdown').eq(i));
});

const rates = [];
$('.js-rate').each((i) => {
  rates[i] = new Rate($('.js-rate').eq(i));
});

new DatesSelector($('.js-dates-selector'));

$('.js-form-elements__section:nth-child(2) .js-form-elements__item:nth-child(1) .js-checkbox__input:gt(0)').prop('checked', true);
$('.js-like__input').eq(1).prop('checked', true);
$('.js-form-elements__section:nth-child(5) .js-form-elements__item:nth-child(2) .js-checkbox__input:lt(4)').prop('checked', true);
$('.js-form-elements__section:nth-child(5) .js-form-elements__item:nth-child(2) .js-checkbox__input').eq(0).prop('checked', false);
$('.js-like__input').eq(2).prop('checked', true);
$(document).ready(() => {
  $('.js-form-elements__section:nth-child(5) .js-form-elements__item:nth-child(2) .js-expandable-checkbox-list__title').trigger('click');

  const $button = $('.js-form-elements__section:nth-child(8) .js-form-elements__item .js-dropdown__inner button');
  $button.eq(2).trigger('click');
  $button.eq(2).trigger('click');
  $button.eq(4).trigger('click');
  $button.eq(7).trigger('click');
  $('.js-form-elements__section:nth-child(8) .js-dropdown__arrow').trigger('click');

  const $roomDropdown = $('.js-dropdown');
  for (let i = 3; i < 5; i += 1) {
    const $dropdownButton = $roomDropdown.eq(i).find('.js-dropdown__counter-button_theme_increment');
    for (let j = 3; j < 5; j += 1) {
      $dropdownButton.eq(j).trigger('click');
      $dropdownButton.eq(j).trigger('click');
    }
  }

  const $jsDropdownWrapper = $('.js-dropdown:not(.dropdown_theme_date)').find('.js-dropdown__inner');
  for (let i = 2; i < 5; i += 1) {
    $jsDropdownWrapper.eq(i).find('.js-dropdown__arrow').text('expand_less');
    $jsDropdownWrapper.eq(i).addClass('dropdown__inner_expanded');
  }

  $('.js-form-elements__section:nth-child(3) .js-form-elements__item:nth-child(3)').bind('DOMSubtreeModified', () => {
    const $paginationPage = $('.paginationjs-page');
    $paginationPage.removeClass('paginationjs-page_size_small');
    if ($paginationPage.length > 4) {
      $paginationPage.addClass('paginationjs-page_size_small');
    }
  });
});
