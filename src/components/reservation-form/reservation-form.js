import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import $ from 'jquery';
import DatesSelector from '../dates-selector/dates-selector';
import '../button/button';
import './reservation-form.scss';

import Dropdown from '../dropdown/dropdown';

new DatesSelector($('.js-reservation-form .js-dates-selector'));
new Dropdown($('.js-reservation-form .js-dropdown').eq(2));
