import '../../variables.scss';
import './like.scss';
import './like.pug';

$(document).ready(() => {
	const $like = $('.like__label');
	$like.each((i) => {
		const $input = $('.like input').eq(i);
		const onClick = (e) => {
			e.preventDefault();
			const $text = $('.like__text').eq(i);
			const value = + $text.html();
			if ($input.prop('checked')) {
				$input.prop('checked', false);
				$text.html(value - 1);
			} else {
				$input.prop('checked', true);
				$text.html(value + 1);
			}
		}
		$like.eq(i).click(onClick);
	});
});

