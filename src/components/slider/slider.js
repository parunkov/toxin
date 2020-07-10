import '../../variables.scss';
import './slider.scss';
import './slider.pug';
import '../../../node_modules/jquery-ui/ui/widgets/slider';
import $ from 'jquery';

class Slider {
  constructor(slider) {
    this.$slider = slider;
    this.$range = slider.find('#slider__range');
    this.$amount = slider.find('#slider__amount');
    this.init();
  }
  init() {
    function prettify(num) {
      const n = num.toString();
      const separator = ' ';
      return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1${separator}`);
    }

    const sliderVal = (values) => {
      this.$amount.val(`${prettify(values[0])}₽ - ${prettify(values[1])}₽`);
    }
    const sliderSet = () => {
      this.$amount.val(`${prettify($('#slider__range').slider('values', 0))}₽`
        + ` - ${prettify(`${$('#slider__range').slider('values', 1)}₽`)}`);
    }

    $(() => {
      $('#slider__range').slider({
        range: true,
        min: 0,
        max: 17000,
        step: 100,
        values: [5000, 10000],
        slide(event, ui) {
          sliderVal(ui.values);
        },
      });
      sliderSet();
    });
  }
}

const slider = new Slider($('.slider__container'));





// function prettify(num) {
//   const n = num.toString();
//   const separator = ' ';
//   return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1${separator}`);
// }

// $(() => {
//   $('#slider__range').slider({
//     range: true,
//     min: 0,
//     max: 17000,
//     step: 100,
//     values: [5000, 10000],
//     slide(event, ui) {
//       $('#slider__amount').val(`${prettify(ui.values[0])}₽ - ${prettify(ui.values[1])}₽`);
//     },
//   });
//   $('#slider__amount').val(`${prettify($('#slider__range').slider('values', 0))}₽`
//     + ` - ${prettify(`${$('#slider__range').slider('values', 1)}₽`)}`);
// });
