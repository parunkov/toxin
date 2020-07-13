import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../components/page/page';
import '../../components/ui-kit/ui-kit';
import '../../components/search-form/search-form';
import '../../components/registration-form/registration-form';
import '../../components/reservation-form/reservation-form';
import '../../components/login-form/login-form';
import '../../components/datepicker-block/datepicker-block';
import '../../components/card/card';
import './cards.scss';
import Datepicker from '../../components/datepicker-block/datepicker-block';
import Card from '../../components/card/card';

const datepicker = new Datepicker($('.js-cards__column_right .js-datepicker-block'));

const cards = [];
$('.js-card').each((i) => {
  cards[i] = new Card($('.js-card').eq(i));
});

