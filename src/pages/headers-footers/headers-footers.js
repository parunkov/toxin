import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../components/page/page';
import '../../components/ui-kit/ui-kit';
import '../../components/header/header';
import '../../components/footer/footer';
import '../../components/logo/logo'
import './headers-footers.scss';

$('.js-header').find('.js-header__navigation-item').eq(0).addClass('js-header__navigation-item_active');
$('.js-header').find('.js-header__navigation-item').eq(0).find('a')
  .addClass('header__link_active');

$('.js-headers-footers__header_logged').find('.js-header__navigation-item').eq(0).addClass('js-header__navigation-item_active');
$('.js-headers-footers__header_logged').find('.js-header__navigation-item').eq(0).find('a')
  .addClass('header__link_active');