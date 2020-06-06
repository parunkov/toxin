import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../btn/btn';
import '../logo/logo';
import './header.scss';
import $ from 'jquery';

const $header = $('.header');
const $subMenu = $('.header__navigation-list .header__navigation-list');
const $itemWithSubMenu = $('.header__navigation-item_with-submenu');
const $burger = $('.header__burger');

$itemWithSubMenu.click(
  function (e) {
    if ($(e.target).parent().hasClass('header__navigation-item_with-submenu')) {
      e.preventDefault();
    }
    if ($(this).find('.header__navigation-list').hasClass('header__navigation-list_visible')) {
      $subMenu.removeClass('header__navigation-list_visible');
      $itemWithSubMenu.removeClass('header__navigation-item_with-submenu-opened');
    } else {
      $subMenu.removeClass('header__navigation-list_visible');
      $itemWithSubMenu.removeClass('header__navigation-item_with-submenu-opened');
      $(this).find('.header__navigation-list').addClass('header__navigation-list_visible');
      console.log($(this));
      $(this).addClass('header__navigation-item_with-submenu-opened');

    }
  },
);
$(document).click(
  (e) => {
    if ($(e.target).parent().hasClass('header__navigation-item_with-submenu')) {
      e.preventDefault();
    } else {
      $subMenu.removeClass('header__navigation-list_visible');
      $itemWithSubMenu.removeClass('header__navigation-item_with-submenu-opened');
    }
  },
);

$burger.each((i) => {
  $burger.eq(i).click(
    () => {
      $('.header').eq(i).find('.header__navigation > .header__navigation-list').toggleClass('header__navigation-list_visible');
      $('.header__user-block').eq(i).toggleClass('header__user-block_visible');
      $('.header').eq(i).find('.header__user-block-logged').toggleClass('header__user-block_visible');
      $burger.eq(i).find('.header__burger-line').toggleClass('header__burger-line_cross');
    },
  );
});
