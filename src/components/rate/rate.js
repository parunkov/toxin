import '../../variables.scss';
import './rate.scss';
import './rate.pug';
import $ from 'jquery';

const $active = $('.rate__active');
$('.rate').each(function (i) {
  if ($active[i].innerHTML) {
    const $rate = $(this);
    const $stars = $rate.children();
    $stars.each(function (j) {
      $(this).click(() => {
        $stars.html('star_border');
        $stars.slice(0, j + 1).html('star');
      });
    });
  }
});
