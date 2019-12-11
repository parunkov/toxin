import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../components/datepicker/datepicker_plugin.js';
import '../../components/datepicker/datepicker.css';
import './datepicker.scss';

$('.datepicker__content').datepicker({
	range: true,
	navTitles: {
	    days: 'MM <i>yyyy</i>',
	    months: 'yyyy',
	    years: 'yyyy1 - yyyy2'
	},
})