import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../dates-selector/dates-selector'
import '../button/button';
import './search-form.scss';
import Dropdown from '../dropdown/dropdown';
import DatesSelector from '../dates-selector/dates-selector';

const selector = new DatesSelector($('.js-search-form .js-dates-selector'));

$('.js-search-form .button_translucent_theme_with-arrow').click((e) => {
	e.preventDefault();
	window.location.href = 'search-room.html';
});
$('.js-search-form').keydown((e) => {
	if (e.keyCode === 13) {
		e.preventDefault();
		return false;
	}
});

const dropdown = new Dropdown($('.js-search-form .js-dropdown').eq(2));
