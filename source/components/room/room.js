import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../input/input.js';
import '../dropdown/dropdown.js';
import '../btn/btn.js';
import './room.scss';

const $button = $('.room__container .iqdropdown button');

$(document).ready(() => {
  $button.eq(1).trigger('click');
  $button.eq(1).trigger('click');
  $button.eq(3).trigger('click');
  $('.room__container .dropdown__set').trigger('click');
  $('.room__container .iqdropdown').removeClass('menu-open');
});
