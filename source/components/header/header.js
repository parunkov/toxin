import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../components/btn/btn.js';
import './header.scss';

$('.header__container').each(function(i) {
	let num = $('.header__container').eq(i).find('.header__active').html();
	$('.header__container').eq(i).find('.header__li').each(function(j) {
		if (j == num) {
			$('.header__container').eq(i).find('.header__li').eq(j).addClass('header__li--active');
			$('.header__container').eq(i).find('.header__li').eq(j).find('a').addClass('header__a--active');
		}
	});
});


$('.header__li--big').click(
	function(e) {
		if ($(e.target).parent().hasClass('header__li--big')) {
			e.preventDefault();
		}
		if ($(this).find('.header__ul-incl').hasClass('header__ul-incl--show')) {
			$('.header__ul-incl').removeClass('header__ul-incl--show');
			$('.header__arrow').text('expand_more');
		} else {
			$('.header__ul-incl').removeClass('header__ul-incl--show');
			$('.header__arrow').text('expand_more');
			$(this).find('.header__ul-incl').addClass('header__ul-incl--show');
			$(this).find('.header__arrow').text('expand_less');
		}
	}
);
$(document).click(
	function(e) {
		if ($(e.target).parent().hasClass('header__li--big')) {
			e.preventDefault();
		} else {
			$('.header__ul-incl').removeClass('header__ul-incl--show');
			$('.header__arrow').text('expand_more');
		}
	}
);

$('.header__burger').click(
	function() {
		$('.header__ul-wrap').toggleClass('header__ul-wrap--show');
		$('.header__login-container').toggleClass('header__login-container--show');
		$('.header__login-container-logged').toggleClass('header__login-container--show');
	}
);