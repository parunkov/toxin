import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../dates-selector/dates-selector'
import '../button/button';
import './reservation-form.scss';
import DatesSelector from '../dates-selector/dates-selector';
import Dropdown from '../dropdown/dropdown';

const selector = new DatesSelector($('.js-reservation-form .js-dates-selector'));
const dropdown = new Dropdown($('.js-reservation-form .js-dropdown').eq(2));
