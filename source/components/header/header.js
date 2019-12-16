import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../components/btn/btn.js';
import './header.scss';

$('.header__container').each(function(i) {
	let num = $('.header__container').eq(i).find('.header__active').html();
	console.log(num);
	$('.header__container').eq(i).find('.header__li').each(function(j) {
		console.log(j);
		if (j == num) {
			$('.header__container').eq(i).find('.header__li').eq(j).addClass('header__li--active');
			$('.header__container').eq(i).find('.header__li').eq(j).find('a').addClass('header__a--active');
		}
	});
});