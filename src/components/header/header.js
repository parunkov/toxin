import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../btn/btn';
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
    this.$burger = header.find('.header__burger');
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
$('.header').each((i) => {
  headers[i] = new Header($('.header').eq(i));
});







// const $header = $('.header');
// const $subMenu = $('.header__navigation-list .header__navigation-list');
// const $itemWithSubMenu = $('.header__navigation-item_with-submenu');
// const $burger = $('.header__burger');

// $itemWithSubMenu.click(
//   function (e) {
//     if ($(e.target).parent().hasClass('header__navigation-item_with-submenu')) {
//       e.preventDefault();
//     }
//     if ($(this).hasClass('header__navigation-item_expanded')) {
//       $itemWithSubMenu.removeClass('header__navigation-item_expanded');
//     } else {
//       $itemWithSubMenu.removeClass('header__navigation-item_expanded');
//       $(this).addClass('header__navigation-item_expanded');

//     }
//   },
// );
// $(document).click(
//   (e) => {
//     if ($(e.target).parent().hasClass('header__navigation-item_with-submenu')) {
//       e.preventDefault();
//     } else {
//       $subMenu.removeClass('header__navigation-list_visible');
//       $itemWithSubMenu.removeClass('header__navigation-item_expanded');
//     }
//   },
// );

// $burger.each((i) => {
//   $burger.eq(i).click(
//     () => {
//       $('.header').eq(i).find('.header__navigation > .header__navigation-list').toggleClass('header__navigation-list_visible');
//       $('.header__user-block').eq(i).toggleClass('header__user-block_visible');
//       $('.header').eq(i).find('.header__user-block-logged').toggleClass('header__user-block_visible');
//       $burger.eq(i).find('.header__burger-line').toggleClass('header__burger-line_cross');
//     },
//   );
// });






// const MenuItem = function(item, href, incl, hrefs) {
//     this.item = item;
//     this.href = href;
//     this.incl = incl;
//     this.hrefs = hrefs;
//   }
// const menuRus = [
//     new MenuItem('О нас', '/mock-address/change-me'),
//     new MenuItem('Услуги', '/mock-address/change-me', ['Услуга 1', 'Услуга 2', 'Услуга 3'], ['/mock-address/change-me', "/mock-address/change-me", '/mock-address/change-me']),
//     new MenuItem('Вакансии', '/mock-address/change-me'),
//     new MenuItem('Новости', '/mock-address/change-me'),
//     new MenuItem('Соглашения', '/mock-address/change-me', ['Соглашение 1', 'Соглашение 2', 'Соглашение 3'], ['/mock-address/change-me', "/mock-address/change-me", '/mock-address/change-me']),
//   ];
//   const menuEng = [
//     new MenuItem('Home', '/mock-address/change-me'),
//     new MenuItem('About Us', '/mock-address/change-me'),
//     new MenuItem('Services', '/mock-address/change-me', ['Service 1', 'Service 2', 'Service 3'], ['/mock-address/change-me', "/mock-address/change-me", '/mock-address/change-me']),
//     new MenuItem('Careers', '/mock-address/change-me'),
//     new MenuItem('News', '/mock-address/change-me'),
//     new MenuItem('Documentation', '/mock-address/change-me')
//   ];
//   const markupEng1 = {
//     cl: '',
//     menu: menuEng,
//     btn1: 'Login',
//     href1: '/mock-address/change-me',
//     btn2: 'Register',
//     href2: '/mock-address/change-me',
//     login: 1
//   }
//   const markupEng2 = {
//     cl: '',
//     menu: menuEng,
//     btn1: 'Login',
//     href1: '/mock-address/change-me',
//     btn2: 'Register',
//     href2: '/mock-address/change-me'
//   }
//   const markupRus = {
//     cl: '',
//     menu: menuRus,
//     btn1: 'войти',
//     href1: 'sign-in.html',
//     btn2: 'зарегистрироваться',
//     href2: 'registration.html'
//   }
// const headerData = {
//   markupEng1,
//   markupEng2,
//   markupRus
// }
// console.log(JSON.stringify(headerData));
// const json = JSON.stringify(headerData);
// const json = require('../../commonData/header.json');
// console.log(json);
// const jsonParse = JSON.parse(json);
// console.log(jsonParse);