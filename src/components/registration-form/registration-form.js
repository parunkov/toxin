import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../input/input';
import '../btn/btn';
import '../radio/radio';
import '../toggle/toggle';
import './registration-form.scss';
import $ from 'jquery';
import {regFormText} from '../../commonData/commonData';

$(document).ready(() => {
  const onWindowResize = () => {
    if ($(window).width() < 350) {
      $('.js-registration-form__title').html(regFormText.header1);
    } else {
      $('.js-registration-form__title').html(regFormText.header2);
    }
  };
  onWindowResize();
  $(window).resize(onWindowResize);
});
