import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../btn/btn';
import './header.scss';
import $ from 'jquery';

const $container = $('.header__container');

$container.each((i) => {
  const num = $container.eq(i).find('.header__active').html();
  $container.eq(i).find('.header__li').each((j) => {
    if (j === +num) {
      $container.eq(i).find('.header__li').eq(j).addClass('header__li--active');
      $container.eq(i).find('.header__li').eq(j).find('a')
        .addClass('header__a--active');
    }
  });
});


$('.header__li--big').click(
  function (e) {
    if ($(e.target).parent().hasClass('header__li--big')) {
      e.preventDefault();
    }
    if ($(this).find('.header__ul-incl').hasClass('header__ul-incl--show')) {
      $('.header__ul-incl').removeClass('header__ul-incl--show');
      $('.header__arrow').text('expand_more');
    } else {
      $('.header__ul-incl').removeClass('header__ul-incl--show');
      $('.header__arrow').text('expand_more');
      $(this).find('.header__ul-incl').addClass('header__ul-incl--show');
      $(this).find('.header__arrow').text('expand_less');
    }
  },
);
$(document).click(
  (e) => {
    if ($(e.target).parent().hasClass('header__li--big')) {
      e.preventDefault();
    } else {
      $('.header__ul-incl').removeClass('header__ul-incl--show');
      $('.header__arrow').text('expand_more');
    }
  },
);

$('.header__burger').click(
  () => {
    $('.header__ul-wrap').toggleClass('header__ul-wrap--show');
    $('.header__login-container').toggleClass('header__login-container--show');
    $('.header__login-container-logged').toggleClass('header__login-container--show');
    $('.header__burger-line--burger').toggleClass('header__burger-line--hide');
    $('.header__burger-line--cross-1').toggleClass('header__burger-line--show');
    $('.header__burger-line--cross-2').toggleClass('header__burger-line--show');
  },
);
