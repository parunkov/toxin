import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../components/page/page.js';
import '../../components/ui_kit/ui_kit.js';
import '../../components/input/input.js';
import '../../components/checkbox/checkbox.js';
import '../../components/radio/radio.js';
import '../../components/toggle/toggle.js';
import '../../components/like/like.js';
import '../../components/rate/rate.js';
import './form_elements.scss';
// import './form_elements.pug';


$('.form_elements__rate-1-star').each(function( i ) {
	$(this).click(function() {
		$('.form_elements__rate-1-star').text('star_border');
		$('.form_elements__rate-1-star:lt('+(i+1)+')').text('star');
	});
});
	$('.form_elements__rate-2-star').each(function( i ) {
		$(this).click(function() {
			$('.form_elements__rate-2-star').text('star_border');
			$('.form_elements__rate-2-star:lt('+(i+1)+')').text('star');
		});
	});
