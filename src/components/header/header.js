import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../btn/btn';
import './header.scss';
import $ from 'jquery';

const $header = $('.header');
const $subMenu = $('.header__nav-list-submenu');
const $itemWithSubMenu = $('.header__nav-item_with-submenu');
const $burger = $('.header__burger');

$header.each((i) => {
  const num = $header.eq(i).find('.header__active-page-number').html();
  $header.eq(i).find('.header__nav-item').each((j) => {
    if (j === +num) {
      $header.eq(i).find('.header__nav-item').eq(j).addClass('header__nav-item_active');
      $header.eq(i).find('.header__nav-item').eq(j).find('a')
        .addClass('header__a_active');
    }
  });
});

$itemWithSubMenu.click(
  function (e) {
    if ($(e.target).parent().hasClass('header__nav-item_with-submenu')) {
      e.preventDefault();
    }
    if ($(this).find('.header__nav-list-submenu').hasClass('header__nav-list-submenu_visible')) {
      $subMenu.removeClass('header__nav-list-submenu_visible');
      $itemWithSubMenu.removeClass('header__nav-item_with-submenu-open');
    } else {
      $subMenu.removeClass('header__nav-list-submenu_visible');
      $itemWithSubMenu.removeClass('header__nav-item_with-submenu-open');
      $(this).find('.header__nav-list-submenu').addClass('header__nav-list-submenu_visible');
      console.log($(this));
      $(this).addClass('header__nav-item_with-submenu-open');

    }
  },
);
$(document).click(
  (e) => {
    if ($(e.target).parent().hasClass('header__nav-item_with-submenu')) {
      e.preventDefault();
    } else {
      $subMenu.removeClass('header__nav-list-submenu_visible');
      $itemWithSubMenu.removeClass('header__nav-item_with-submenu-open');
    }
  },
);

$burger.each((i) => {
  $burger.eq(i).click(
    () => {
      $('.header__nav-list-wrap').eq(i).toggleClass('header__nav-list-wrap_visible');
      $('.header__btn-container').eq(i).toggleClass('header__btn-container_visible');
      $('.header').eq(i).find('.header__btn-container-logged').toggleClass('header__btn-container_visible');
      $burger.eq(i).find('.header__burger-line').toggleClass('header__burger-line_cross');
    },
  );
});
