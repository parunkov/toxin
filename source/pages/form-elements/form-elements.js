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

$('.form-elements__checkbox-1:gt(0)').prop('checked', true);
$('.form-elements__toggle').eq(0).prop('checked', true);
$('.form-elements__2-like').prop('checked', true);
$('.form-elements__checkbox-2:lt(4)').prop('checked', true);
$('.form-elements__checkbox-2').eq(0).prop('checked', false);
$('.form-elements__revew-1-like').prop('checked', true);
$(document).ready(() => {

  $('.input__icon-dropdown').eq(1).trigger('click');
  $('.input__icon-dropdown').eq(2).trigger('click');
  $('.input__icon-dropdown').eq(3).trigger('click');

  const $button = $('.form-elements__item_22 .iqdropdown button');
  $button.eq(1).trigger('click');
  $button.eq(1).trigger('click');
  $button.eq(3).trigger('click');

  $('.form-elements__item_15').bind('DOMSubtreeModified', () => {
    const $paginationPage = $('.paginationjs-page');
    if ($paginationPage.length > 4) {
      $paginationPage.css({ 'margin-right': '-8px' });
    }
  });

});
