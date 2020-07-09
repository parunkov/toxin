import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../../node_modules/air-datepicker/dist/js/datepicker';
import '../../../node_modules/air-datepicker/dist/css/datepicker.css';
import './datepicker-block.scss';
import $ from 'jquery';


class Datepicker {
  constructor(datepicker) {
    this.datepicker = datepicker;
    this.setBtn = this.datepicker.find('.datepicker-block__set-btn');
    this.clearBtn = this.datepicker.find('.datepicker-block__clear-btn');
    this.content = this.datepicker.find('.datepicker-block__content');
    this.init();
  }
  init() {
    this.content.datepicker({
      minDate: new Date(),
      range: true,
      navTitles: {
        days: 'MM <i>yyyy</i>',
        months: 'yyyy',
        years: 'yyyy1 - yyyy2',
      },
      dateFormat: 'dd.mm.yyyy',
    });
    this.dates = this.content.datepicker().data('datepicker');
    this.setBtn.click((evt) => this.set(evt));
    this.clearBtn.click((evt) => this.clear(evt));
    this.datepicker.mousemove(() => this.mousemove());
  }
  set(evt) {
    evt.preventDefault();
    return this.dates.selectedDates;
  }
  clear(evt) {
    evt.preventDefault();
    this.dates.clear();
    this.clearBtn.removeClass('datepicker-block__clear-btn_visible');
    return this.dates.selectedDates;
  }
  mousemove() {
    if (this.dates.selectedDates.length === 0) {
      this.clearBtn.removeClass('datepicker-block__clear-btn_visible');
    } else {
      this.clearBtn.addClass('datepicker-block__clear-btn_visible');
    }
  }
}


// const datepickers = [];
// $('.datepicker-block').each((i) =>{
//   datepickers[i] = new Datepicker($('.datepicker-block').eq(i));
// });
export default Datepicker;





// $('.datepicker-block__content').datepicker({
//   minDate: new Date(),
//   range: true,
//   navTitles: {
//     days: 'MM <i>yyyy</i>',
//     months: 'yyyy',
//     years: 'yyyy1 - yyyy2',
//   },
//   dateFormat: 'dd.mm.yyyy',
// });

// const myDatepickers = [];

// $('.datepicker-block__content').each((i) => {
//   myDatepickers[i] = $('.datepicker-block__content').eq(i).datepicker().data('datepicker');
// });
// const $clear = $('.datepicker-block__clear-btn');
// $('.datepicker-block__set-btn').each((i) => {
//   $('.datepicker-block__set-btn').eq(i).click((evt) => {
//     evt.preventDefault();
//     console.log(myDatepickers[i].selectedDates);
//   });
// });
// $clear.each((i) => {
//   $clear.eq(i).click((evt) => {
//     evt.preventDefault();
//     myDatepickers[i].clear();
//     $clear.eq(i).removeClass('datepicker-block__clear-btn_visible');
//   });
// });
// $('.datepicker-block').each(function (i) {
//   $(this).mousemove(() => {
//     if (myDatepickers[i].selectedDates.length === 0) {
//       $clear.eq(i).removeClass('datepicker-block__clear-btn_visible');
//     } else {
//       $clear.eq(i).addClass('datepicker-block__clear-btn_visible');
//     }
//   });
// });
