import '../../variables.scss';
import './input.scss';
import './input.pug';
import $ from 'jquery';

const $icon = $('.input__button');

$icon.each((i) => {
  $icon.eq(i).click(() => {
    if ($icon.eq(i).text() === 'expand_more') {
      $icon.eq(i).text('expand_less');
    } else if ($icon.eq(i).text() === 'expand_less') {
      $icon.eq(i).text('expand_more');
    }
  });
});
