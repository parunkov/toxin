import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../button/button';
import '../logo/logo';
import './header.scss';
import $ from 'jquery';

const $subMenu = $('.header__navigation-list .header__navigation-list');
const $itemWithSubMenu = $('.header__navigation-item_with-submenu');

$itemWithSubMenu.click(
  function (e) {
    if ($(e.target).parent().hasClass('header__navigation-item_with-submenu')) {
      e.preventDefault();
    }
    if ($(this).hasClass('header__navigation-item_expanded')) {
      $itemWithSubMenu.removeClass('header__navigation-item_expanded');
    } else {
      $itemWithSubMenu.removeClass('header__navigation-item_expanded');
      $(this).addClass('header__navigation-item_expanded');
    }
  },
);
$(document).click(
  (e) => {
    if ($(e.target).parent().hasClass('header__navigation-item_with-submenu')) {
      e.preventDefault();
    } else {
      $subMenu.removeClass('header__navigation-list_visible');
      $itemWithSubMenu.removeClass('header__navigation-item_expanded');
    }
  },
);

class Header {
  constructor(header) {
    this.$header = header;
    this.$burger = header.find('.js-header__burger');
    this.init();
  }

  init() {
    this.$burger.click(
      () => {
        this.$header.find('.header__navigation > .header__navigation-list').toggleClass('header__navigation-list_visible');
        this.$header.find('.header__user-block').toggleClass('header__user-block_visible');
        this.$header.find('.header__user-block-logged').toggleClass('header__user-block_visible');
        this.$burger.find('.header__burger-line').toggleClass('header__burger-line_cross');
      },
    );
  }
}

const headers = [];
$('.js-header').each((i) => {
  headers[i] = new Header($('.js-header').eq(i));
});
