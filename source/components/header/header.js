import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../components/btn/btn.js';
import './header.scss';

$('.header__container').each(function(i) {
	let num = $('.header__container').eq(i).find('.header__active').html();
	// console.log(num);
	$('.header__container').eq(i).find('.header__li').each(function(j) {
		// console.log(j);
		if (j == num) {
			$('.header__container').eq(i).find('.header__li').eq(j).addClass('header__li--active');
			$('.header__container').eq(i).find('.header__li').eq(j).find('a').addClass('header__a--active');
		}
	});
});

$('.header__li').hover(
	function(){
		$(this).find('.header__ul-incl').addClass('header__ul-incl--show');
		$(this).find('.header__arrow').text('expand_less');
		$(document).click(
			function(){
				$('.header__ul-incl').removeClass('header__ul-incl--show');
				$('.header__arrow').text('expand_more');
			}
		)
	}
);