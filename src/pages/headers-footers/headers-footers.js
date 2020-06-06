import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../components/page/page';
import '../../components/ui-kit/ui-kit';
import '../../components/header/header';
import '../../components/footer/footer';
import '../../components/logo/logo'
import './headers-footers.scss';

$('.header').find('.header__navigation-item').eq(0).addClass('header__navigation-item_active');
$('.header').find('.header__navigation-item').eq(0).find('a')
  .addClass('header__link_active');

$('.headers-footers__header_2').find('.header__navigation-item').eq(0).addClass('header__navigation-item_active');
$('.headers-footers__header_2').find('.header__navigation-item').eq(0).find('a')
  .addClass('header__link_active');