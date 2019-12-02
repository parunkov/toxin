import '../../variables.scss';
import './rate.scss';
import './rate.pug';

let $active = $('.rate__active');
	$('.rate__container').each(function(i) {
		if ($active[i].innerHTML) {
			let $rate = $(this);
			let $stars = $rate.children();
			$stars.each(function(i) {
				$(this).click(function() {
					$stars.html('star_border');
					$stars.slice(0, i+1).html('star');
				});
			});
		}
	});

