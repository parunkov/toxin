import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../btn/btn';
import './header.scss';
import $ from 'jquery';

const $header = $('.header');

$header.each((i) => {
  const num = $header.eq(i).find('.header__active-page-number').html();
  $header.eq(i).find('.header__li').each((j) => {
    if (j === +num) {
      $header.eq(i).find('.header__li').eq(j).addClass('header__li_active');
      $header.eq(i).find('.header__li').eq(j).find('a')
        .addClass('header__a_active');
    }
  });
});


$('.header__li_big').click(
  function (e) {
    if ($(e.target).parent().hasClass('header__li_big')) {
      e.preventDefault();
    }
    if ($(this).find('.header__ul-incl').hasClass('header__ul-incl_show')) {
      $('.header__ul-incl').removeClass('header__ul-incl_show');
      $('.header__li_big').removeClass('header__li_big-open');
    } else {
      $('.header__ul-incl').removeClass('header__ul-incl_show');
      $('.header__li_big').removeClass('header__li_big-open');
      $(this).find('.header__ul-incl').addClass('header__ul-incl_show');
      console.log($(this));
      $(this).addClass('header__li_big-open');

    }
  },
);
$(document).click(
  (e) => {
    if ($(e.target).parent().hasClass('header__li_big')) {
      e.preventDefault();
    } else {
      $('.header__ul-incl').removeClass('header__ul-incl_show');
      $('.header__li_big').removeClass('header__li_big-open');
    }
  },
);

$('.header__burger').each((i) => {
  $('.header__burger').eq(i).click(
    () => {
      $('.header__ul-wrap').eq(i).toggleClass('header__ul-wrap_show');
      $('.header__login-container').eq(i).toggleClass('header__login-container_show');
      $('.header').eq(i).find('.header__login-container-logged').toggleClass('header__login-container_show');
      $('.header__burger').eq(i).find('.header__burger-line').toggleClass('header__burger-line_cross');
    },
  );
});
