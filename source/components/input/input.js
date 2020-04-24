import '../../variables.scss';
import './input.scss';
import './input.pug';

const $icon = $('.input__icon');

$icon.each((i) => {
  $icon.eq(i).click(() => {
    if ($icon.eq(i).find('.input__icon-text').text() === 'expand_more') {
      $icon.eq(i).find('.input__icon-text').text('expand_less');
    } else if ($icon.eq(i).find('.input__icon-text').text() === 'expand_less') {
      $icon.eq(i).find('.input__icon-text').text('expand_more');
    }
  });
});
