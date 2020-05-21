import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../btn/btn';
import './header.scss';
import $ from 'jquery';

const $header = $('.header');
const $subMenu = $('.header__navigation-list-submenu');
const $itemWithSubMenu = $('.header__navigation-item_with-submenu');
const $burger = $('.header__burger');

$header.each((i) => {
  const num = $header.eq(i).find('.header__active-page-number').html();
  $header.eq(i).find('.header__navigation-item').each((j) => {
    if (j === +num) {
      $header.eq(i).find('.header__navigation-item').eq(j).addClass('header__navigation-item_active');
      $header.eq(i).find('.header__navigation-item').eq(j).find('a')
        .addClass('header__link_active');
    }
  });
});

$itemWithSubMenu.click(
  function (e) {
    if ($(e.target).parent().hasClass('header__navigation-item_with-submenu')) {
      e.preventDefault();
    }
    if ($(this).find('.header__navigation-list-submenu').hasClass('header__navigation-list-submenu_visible')) {
      $subMenu.removeClass('header__navigation-list-submenu_visible');
      $itemWithSubMenu.removeClass('header__navigation-item_with-submenu-open');
    } else {
      $subMenu.removeClass('header__navigation-list-submenu_visible');
      $itemWithSubMenu.removeClass('header__navigation-item_with-submenu-open');
      $(this).find('.header__navigation-list-submenu').addClass('header__navigation-list-submenu_visible');
      console.log($(this));
      $(this).addClass('header__navigation-item_with-submenu-open');

    }
  },
);
$(document).click(
  (e) => {
    if ($(e.target).parent().hasClass('header__navigation-item_with-submenu')) {
      e.preventDefault();
    } else {
      $subMenu.removeClass('header__navigation-list-submenu_visible');
      $itemWithSubMenu.removeClass('header__navigation-item_with-submenu-open');
    }
  },
);

$burger.each((i) => {
  $burger.eq(i).click(
    () => {
      $('.header__navigation-list-wrapper').eq(i).toggleClass('header__navigation-list-wrapper_visible');
      $('.header__user-block').eq(i).toggleClass('header__user-block_visible');
      $('.header').eq(i).find('.header__user-block-logged').toggleClass('header__user-block_visible');
      $burger.eq(i).find('.header__burger-line').toggleClass('header__burger-line_cross');
    },
  );
});
