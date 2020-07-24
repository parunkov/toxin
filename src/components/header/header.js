import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../button/button';
import '../logo/logo';
import './header.scss';
import $ from 'jquery';

const $subMenu = $('.js-header__navigation-list .js-header__navigation-list');
const $itemWithSubMenu = $('.js-header__navigation-item_with-submenu');

$itemWithSubMenu.click(
  function (e) {
    if ($(e.target).parent().hasClass('js-header__navigation-item_with-submenu')) {
      e.preventDefault();
    }
    if ($(this).hasClass('js-header__navigation-item_expanded')) {
      $itemWithSubMenu.removeClass('js-header__navigation-item_expanded');
    } else {
      $itemWithSubMenu.removeClass('js-header__navigation-item_expanded');
      $(this).addClass('js-header__navigation-item_expanded');

    }
  },
  );
$(document).click(
  (e) => {
    if ($(e.target).parent().hasClass('js-header__navigation-item_with-submenu')) {
      e.preventDefault();
    } else {
      $subMenu.removeClass('js-header__navigation-list_visible');
      $itemWithSubMenu.removeClass('js-header__navigation-item_expanded');
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
        this.$header.find('.js-header__navigation > .js-header__navigation-list').toggleClass('js-header__navigation-list_visible');
        this.$header.find('.js-header__user-block').toggleClass('js-header__user-block_visible');
        this.$header.find('.js-header__user-block-logged').toggleClass('js-header__user-block_visible');
        this.$burger.find('.js-header__burger-line').toggleClass('js-header__burger-line_cross');
      },
      );
  }
}

const headers = [];
$('.js-header').each((i) => {
  headers[i] = new Header($('.js-header').eq(i));
});


