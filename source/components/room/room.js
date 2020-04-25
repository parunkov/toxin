import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../input/input';
import '../dropdown/dropdown';
import '../btn/btn';
import './room.scss';
import $ from 'jquery';

const $button = $('.room__container .iqdropdown button');

$(document).ready(() => {
  $button.eq(1).trigger('click');
  $button.eq(1).trigger('click');
  $button.eq(3).trigger('click');
  $('.room__container .dropdown__set').trigger('click');
  $('.room__container .iqdropdown').removeClass('menu-open');
});
