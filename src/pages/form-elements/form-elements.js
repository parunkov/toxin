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

$('.form-elements__section:nth-child(2) .form-elements__item:nth-child(1) .checkbox__input:gt(0)').prop('checked', true);
$('.form-elements__section:nth-child(2) .form-elements__item:nth-child(3) .toggle__input').eq(0).prop('checked', true);
$('.like__input').eq(1).prop('checked', true);
$('.form-elements__section:nth-child(5) .form-elements__item:nth-child(2) .checkbox__input:lt(4)').prop('checked', true);
$('.form-elements__section:nth-child(5) .form-elements__item:nth-child(2) .checkbox__input').eq(0).prop('checked', false);
$('.like__input').eq(2).prop('checked', true);
$(document).ready(() => {
  $('.dropdown__input-icon').eq(1).trigger('click');
  $('.dropdown__input-icon').eq(2).trigger('click');
  $('.dropdown__input-icon').eq(3).trigger('click');

  const $button = $('.form-elements__section:nth-child(8) .form-elements__item .dropdown__wrapper button');
  $button.eq(1).trigger('click');
  $button.eq(1).trigger('click');
  $button.eq(3).trigger('click');

  $('.form-elements__section:nth-child(3) .form-elements__item:nth-child(3)').bind('DOMSubtreeModified', () => {
    const $paginationPage = $('.paginationjs-page');
    if ($paginationPage.length > 4) {
      $paginationPage.css({ 'margin-right': '-8px' });
    }
  });
});
