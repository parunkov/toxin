import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../dates-selector/dates-selector'
import '../btn/btn';
import './search-form.scss';
import Dropdown from '../dropdown/dropdown';
import DatesSelector from '../dates-selector/dates-selector';

const selector = new DatesSelector($('.search-form .js-dates-selector'));

$('.search-form .btn_theme_arrow').click((e) => {
	e.preventDefault();
	window.location.href = 'search-room.html';
});

const dropdown = new Dropdown($('.search-form .js-dropdown').eq(2));
