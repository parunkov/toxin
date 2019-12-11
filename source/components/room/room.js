import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../components/input/input.js';
import '../../components/dropdown/dropdown.js';
import '../../components/btn/btn.js';
import './room.scss';
$(document).ready(() => {
	$('.room__container .iqdropdown button').eq(1).trigger('click');
	$('.room__container .iqdropdown button').eq(1).trigger('click');
	$('.room__container .iqdropdown button').eq(3).trigger('click');
	$('.room__container .dropdown__set').trigger('click');
});