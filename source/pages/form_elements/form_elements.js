import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../components/page/page';
import '../../components/ui_kit/ui_kit';
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
import './form_elements.scss';
import $ from 'jquery';

$('.form_elements__checkbox-1:gt(0)').prop('checked', true);
$('.form_elements__toggle').eq(0).prop('checked', true);
$('.form_elements__2-like').prop('checked', true);
$('.form_elements__item--17 .iqdropdown').addClass('menu-open');
$('.form_elements__checkbox-2:lt(4)').prop('checked', true);
$('.form_elements__checkbox-2').eq(0).prop('checked', false);
$('.form_elements__item--20 .iqdropdown').addClass('menu-open');
$('.form_elements__item--22 .iqdropdown').addClass('menu-open');
$('.form_elements__revew-1-like').prop('checked', true);
$(document).ready(() => {
  const $button = $('.form_elements__item--22 .iqdropdown button');
  $button.eq(1).trigger('click');
  $button.eq(1).trigger('click');
  $button.eq(3).trigger('click');
  $('.form_elements__item--22 .dropdown__set').trigger('click');
  $('.form_elements__item--22 .iqdropdown').addClass('menu-open');

  $('.form_elements__item--15').bind('DOMSubtreeModified', () => {
  	const $paginationPage = $('.paginationjs-page');
  	if($paginationPage.length > 4) {
  		$paginationPage.css({'margin-right': '-8px'});
  	}

  });
});
