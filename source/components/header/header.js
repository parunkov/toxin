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

let openedMenu;
let isOpen = false;

$('.header__li--big a').click(
	function(e){
		if (!isOpen) {
			e.preventDefault();
			$('.header__ul-incl').removeClass('header__ul-incl--show');
			$('.header__arrow').text('expand_more');
			$(this).parent().find('.header__ul-incl').addClass('header__ul-incl--show');
			$(this).parent().find('.header__arrow').text('expand_less');
			isOpen = true;
			openedMenu = this;
		}
	}
);
$(document).click(
	function(e) {
		if (e.target != openedMenu) {
			if ($(e.target).parent().hasClass('header__li--big')) {
				e.preventDefault();
				console.log(isOpen);
			}
			if (isOpen) {
				$('.header__ul-incl').removeClass('header__ul-incl--show');
				$('.header__arrow').text('expand_more');
				isOpen = false;
				$(e.target).parent().find('.header__ul-incl').addClass('header__ul-incl--show');
				$(e.target).parent().find('.header__arrow').text('expand_less');
			}
		}
	}
);
$('.header__arrow').click(
	function() {
		if ($(this).text() === 'expand_more') {
			console.log(1);
			$(this).parent().find('.header__ul-incl').addClass('header__ul-incl--show');
			$(this).parent().find('.header__arrow').text('expand_less');
		} else {
			$(this).parent().find('.header__ul-incl').removeClass('header__ul-incl--show');
			$(this).parent().find('.header__arrow').text('expand_more');
		}
	}
);