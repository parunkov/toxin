import '../../variables.scss';
import './slider.scss';
import './slider.pug';
import '../../../node_modules/jquery-ui/ui/widgets/slider.js';
import $ from 'jquery';

function prettify(num) {
  const n = num.toString();
  const separator = ' ';
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1${separator}`);
}

$(() => {
  $('#slider-range').slider({
    range: true,
    min: 0,
    max: 17000,
    step: 100,
    values: [5000, 10000],
    slide(event, ui) {
      $('#amount').val(`${prettify(ui.values[0])}₽ - ${prettify(ui.values[1])}₽`);
    },
  });
  $('#amount').val(`${prettify($('#slider-range').slider('values', 0))}₽`
    + ` - ${prettify(`${$('#slider-range').slider('values', 1)}₽`)}`);
});
