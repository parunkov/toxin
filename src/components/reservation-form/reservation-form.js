import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../dates-selector/dates-selector'
import '../btn/btn';
import './reservation-form.scss';
import DatesSelector from '../dates-selector/dates-selector';
import Dropdown from '../dropdown/dropdown';

const selector = new DatesSelector($('.reservation-form .dates-selector'));
const dropdown = new Dropdown($('.reservation-form .dropdown').eq(2));
