import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../input/input';
import '../btn/btn';
import '../radio/radio';
import '../toggle/toggle';
import './reg.scss';
import $ from 'jquery';

const onWindowResize = () => {
  if ($(window).width() < 350) {
    $('.reg__header').html('Регистрация<br>аккаунта');
  } else {
    $('.reg__header').html('Регистрация аккаунта');
  }
};
onWindowResize();
$(window).resize(onWindowResize);
