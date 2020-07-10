import '../../variables.scss';
import './dropdown.scss';
import './dropdown.pug';
import $ from 'jquery';
import {dropdownTexts} from '../../commonData/commonData';

// const dropdownTexts = {
//   type: 'спальни',
//   value1:'0 спален, 0 кроватей, 0 ванных',
//   placeholder1: 'Выберите удобства',
//   placeholder2: 'дд.мм.гггг',
//   placeholder3: 'Сколько гостей',
//   variants1: ['спальня', 'спальни', 'спален'],
//   variants2: ['ванная', 'ванные', 'ванных'],
//   variants3: ['младенец', 'младенца', 'младенцев'],
//   variants4: ['кровать', 'кровати', 'кроватей'],
//   variants5: ['гость', 'гостя', 'гостей']
// }

const num2str = function (num, textForms) {
  const n = Math.abs(num) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) { return textForms[2]; }
  if (n1 > 1 && n1 < 5) { return textForms[1]; }
  if (n1 === 1) { return textForms[0]; }
  return textForms[2];
};

class Counter {
  constructor(counter) {
    this.$counter = counter;
    this.$incrementBtn = counter.find('.dropdown__counter-button_theme_increment');
    this.$decrementBtn = counter.find('.dropdown__counter-button_theme_decrement');
    this.$count = counter.find('.dropdown__counter');
    this.value = 0;
    this.init();
  }
  init() {

    this.$decrementBtn.addClass('dropdown__counter-button_theme_decrement-inactive');

    const onIncrementClick = (evt) => {
      evt.preventDefault();
      this.value += 1;
      this.$count.html(this.value);
      this.$decrementBtn.removeClass('dropdown__counter-button_theme_decrement-inactive');
    }
    const onDecrementClick = (evt) => {
      evt.preventDefault();
      this.$decrementBtn.addClass('dropdown__counter-button_theme_decrement-inactive');
        if (this.value > 1) {
           this.$decrementBtn.removeClass('dropdown__counter-button_theme_decrement-inactive');
           this.value -= 1;
         } else if (this.value > 0) {
          this.value -= 1;
        } else {
          this.value = 0;
        }
      this.$count.html(this.value);
    }

    this.$incrementBtn.click((evt) => onIncrementClick(evt));
    this.$decrementBtn.click((evt) => onDecrementClick(evt));
  }
}

class Dropdown {
  constructor(dropdown) {
    this.$dropdown = dropdown;
    this.counters = [];
    this.total = 0;
    this.$wrapper = dropdown.find('.dropdown__wrapper');
    this.$arrow = dropdown.find('.dropdown__arrow');
    this.$input = dropdown.find('.dropdown__input');
    this.type = dropdown.find('.dropdown__item-text').html();
    this.$setBtn = dropdown.find('.dropdown__set-btn');
    this.$clearBtn = dropdown.find('.dropdown__clear-btn');
    this.init();
  }
  init() {

    this.setPlaceholder();

    const $controls = this.$dropdown.find('.dropdown__item-controls');
    const counters = [];

    const onArrowClick = () => {
      if (this.$arrow.text() === 'expand_more') {
        this.$arrow.text('expand_less');
        this.$wrapper.addClass('dropdown__wrapper_expanded');
      } else {
        this.$arrow.text('expand_more');
        this.$wrapper.removeClass('dropdown__wrapper_expanded');
      }
    }
    if (!this.$dropdown.hasClass('dropdown_theme_date')) {
      this.$arrow.click(onArrowClick);
    }

    const onControlsClick = (() => {
      this.total = 0;
      for (let i = 0; i < counters.length; i += 1) {
        this.total += counters[i].value;
      }
      this.$input.attr('value', this.setValue());
      console.log(this.total);
      if (this.$input.attr('value')) {
        console.log(this.$clearBtn);
        this.$clearBtn.addClass('dropdown__clear-btn_visible');
      }
    });
    $controls.each((i) => {
      this.counters[i] = new Counter(this.$dropdown.find('.dropdown__item-controls').eq(i));
      this.$dropdown.find('.dropdown__item-controls').eq(i).click(onControlsClick);
    });

    this.$setBtn.click((e) => this.setBtnClick(e));
    this.$clearBtn.click((e) => this.clearBtnClick(e));
    $(document).click((e) => this.documentClick(e));

  } 

  setPlaceholder() {
    if (this.type === dropdownTexts.type) {
      this.$input.attr('value', dropdownTexts.value1);
      this.$input.attr('placeholder', dropdownTexts.placeholder1);
    } else if (!this.type) {
      this.$input.attr('placeholder', dropdownTexts.placeholder2);
    } else {
      this.$input.attr('placeholder', dropdownTexts.placeholder3);
    }
  }

  setValue() {
      let inputValue = '';
      if (this.type === dropdownTexts.type){
        const textPart0 = `${this.counters[0].value} ${num2str(+this.counters[0].value, dropdownTexts.variants1)}`;
        const textPart1 = `${this.counters[1].value} ${num2str(+this.counters[1].value, dropdownTexts.variants4)}`;
        const textPart2 = `${this.counters[2].value} ${num2str(+this.counters[2].value, dropdownTexts.variants2)}`;

        inputValue = '';
        if (this.counters[0].value) {
          inputValue = inputValue + textPart0;
        }
        if (this.counters[1].value) {
          if (this.counters[0].value) {
            inputValue = inputValue + ', ';
          }
          inputValue = inputValue + textPart1;
        }
        if (this.counters[2].value) {
          if (this.counters[0].value || this.counters[1].value) {
            inputValue = inputValue + ', ';
          }
          inputValue = inputValue + textPart2;
        }
      } else {
        const guestsNumber = this.counters[0].value
        + this.counters[1].value
        + this.counters[2].value;
        const babyNumber = this.counters[2].value;
        inputValue = `${guestsNumber} ${num2str(+guestsNumber,
          dropdownTexts.variants5)}`;
        if (babyNumber) {
          const inputText = inputValue;
          inputValue = `${inputText}, ${babyNumber} ${num2str(+babyNumber, dropdownTexts.variants3)}`;
        }
        if (guestsNumber === 0) {
          inputValue = '';
        }
      }
      return inputValue;
  }

  setBtnClick(e) {
    e.preventDefault();
    this.$arrow.text('expand_more');
    this.$wrapper.removeClass('dropdown__wrapper_expanded');
    this.setValue();
  }
  clearBtnClick(e) {
    e.preventDefault();
    this.total = 0;
    this.$dropdown.find('.dropdown__counter').html('0');
    this.$clearBtn.removeClass('dropdown__clear-btn_visible');
    this.setValue();
    this.$input.attr('value', '');
    for (let i = 0; i < this.counters.length; i += 1) {
      this.counters[i].$decrementBtn.addClass('dropdown__counter-button_theme_decrement-inactive');
      this.counters[i].value = 0;
    }
  }
  documentClick(e) {
    if (!this.$dropdown.hasClass('dropdown_theme_date')) {
      if (!this.$wrapper.is(e.target) && this.$wrapper.has(e.target).length === 0) {
        this.$arrow.text('expand_more');
        this.$wrapper.removeClass('dropdown__wrapper_expanded');
      }
    }
  }

}

// const $dropdowns = [];
// $('.dropdown').each((i) =>{
//   $dropdowns[i] = new Dropdown($('.dropdown').eq(i));
// });

export default Dropdown;








// $(document).ready(() => {
//   const $dropdown__wrapper = $('.dropdown:not(.dropdown_theme_date)').find('.dropdown__wrapper');

//   $dropdown__wrapper.each((i) => {
//     const $dropdown = $('.dropdown');
//     const $counter = $dropdown__wrapper.eq(i).find('.dropdown__counter');
//     const $decrementBtn = $dropdown__wrapper.eq(i).find('.dropdown__counter-button_theme_decrement');
//     const $incrementBtn = $dropdown__wrapper.eq(i).find('.dropdown__counter-button_theme_increment');
//     const $text = $('.dropdown__input');
//     const $dropdownClear = $dropdown__wrapper.eq(i).find('.dropdown__clear-btn');

//     let totalCount = 0;
//     let inputValue = '';

//     $dropdown.each((j) => {
//       const type = $dropdown.eq(j).find('.dropdown__item-text').html();
//       if (type === dropdownTexts.type) {
//         $text.eq(j).attr('value', dropdownTexts.value1);
//         $text.eq(j).attr('placeholder', dropdownTexts.placeholder1);
//       } else if (!type) {
//         $text.eq(j).attr('placeholder', dropdownTexts.placeholder2);
//       } else {
//         $text.eq(j).attr('placeholder', dropdownTexts.placeholder3);
//       }
//     });


//     $counter.each((j) => {
//       $incrementBtn.eq(j).click((evt) => {
//         evt.preventDefault();
//         let count = +$counter.eq(j).html();
//         count += 1;
//         $counter.eq(j).html(count);
//         totalCount += 1;
//         // console.log(totalCount);
//         if (totalCount) {
//           $dropdownClear.addClass('dropdown__clear-btn_visible');
//         }
//       });
//       $decrementBtn.eq(j).click((evt) => {
//         evt.preventDefault();
//         let count = +$counter.eq(j).html();
//         if (count <= 0) {
//           count = 0;
//         } else {
//           count -= 1;
//           totalCount -= 1;
//         }
//         // console.log(totalCount);
//         if (!totalCount) {
//           $dropdownClear.removeClass('dropdown__clear-btn_visible');
//         }
//         $counter.eq(j).html(count);
//       });
//     });

//     const opacytyBtn = function () {
//       for (let j = 0; j < $counter.length; j += 1) {
//         if ($counter.eq(j).html() === '0') {
//           $decrementBtn.eq(j).addClass('dropdown__counter-button_theme_decrement-inactive');
//         } else {
//           $decrementBtn.eq(j).removeClass('dropdown__counter-button_theme_decrement-inactive');
//         }
//       }
//     };
//     opacytyBtn();

//     $dropdown__wrapper.eq(i).find('.dropdown__arrow').click(() => {
//       if ($dropdown__wrapper.eq(i).find('.dropdown__arrow').text() === 'expand_more') {
//         $dropdown__wrapper.eq(i).find('.dropdown__arrow').text('expand_less');
//         $dropdown__wrapper.eq(i).addClass('dropdown__wrapper_expanded');
//       } else {
//         $dropdown__wrapper.eq(i).find('.dropdown__arrow').text('expand_more');
//         $dropdown__wrapper.eq(i).removeClass('dropdown__wrapper_expanded');
//       }
//     });

//     $dropdown__wrapper.eq(i).find('button').click(() => {
//       opacytyBtn();

//       const $itemCounter = $('.dropdown__menu').eq(i).find('.dropdown__counter');
//       const type = $dropdown.eq(i).find('.dropdown__item-text').html();
//       if (type === dropdownTexts.type){
//         const textPart0 = `${$itemCounter[0].innerHTML} ${num2str(+$itemCounter[0].innerHTML, dropdownTexts.variants1)}`;
//         const textPart1 = `${$itemCounter[1].innerHTML} ${num2str(+$itemCounter[1].innerHTML, dropdownTexts.variants4)}`;
//         const textPart2 = `${$itemCounter[2].innerHTML} ${num2str(+$itemCounter[2].innerHTML, dropdownTexts.variants2)}`;

//         inputValue = '';
//         if (+$itemCounter[0].innerHTML) {
//           inputValue = inputValue + textPart0;
//         }
//         if (+$itemCounter[1].innerHTML) {
//           if (+$itemCounter[0].innerHTML) {
//             inputValue = inputValue + ', ';
//           }
//           inputValue = inputValue + textPart1;
//         }
//         if (+$itemCounter[2].innerHTML) {
//           if (+$itemCounter[0].innerHTML || +$itemCounter[1].innerHTML) {
//             inputValue = inputValue + ', ';
//           }
//           inputValue = inputValue + textPart2;
//         }
//         $dropdown__wrapper.eq(i).find('.dropdown__input').eq(i).attr('value', inputValue);
//       } else {
//         const guestsNumber = +$itemCounter[0].innerHTML
//         + +$itemCounter[1].innerHTML
//         + +$itemCounter[2].innerHTML;
//         const babyNumber = +$itemCounter[2].innerHTML;
//         inputValue = `${guestsNumber} ${num2str(+guestsNumber,
//           dropdownTexts.variants5)}`;
//         if (babyNumber) {
//           const inputText = inputValue;
//           inputValue = `${inputText}, ${babyNumber} ${num2str(+babyNumber, dropdownTexts.variants3)}`;
//         }
//         if (guestsNumber === 0) {
//           inputValue = '';
//         }
//         $dropdown__wrapper.eq(i).find('.dropdown__input').eq(i).attr('value', inputValue);
//       }
//     });

//     $dropdown__wrapper.eq(i).find('.dropdown__set-btn').click((e) => {
//       e.preventDefault();
//       $dropdown__wrapper.eq(i).find('.dropdown__arrow').text('expand_more');
//       $dropdown__wrapper.eq(i).removeClass('dropdown__wrapper_expanded');
//       $dropdown__wrapper.eq(i).find('.dropdown__input').attr('value', inputValue);
//     });
//     $dropdown__wrapper.eq(i).find('.dropdown__clear-btn').click((e) => {
//       e.preventDefault();
//       totalCount = 0;
//       $dropdown__wrapper.eq(i).find('.dropdown__counter').html('0');
//       $dropdownClear.removeClass('dropdown__clear-btn_visible');
//       opacytyBtn();
//       $dropdown__wrapper.eq(i).find('.dropdown__input').attr('placeholder', dropdownTexts.placeholder3);
//       $dropdown__wrapper.eq(i).find('.dropdown__input').attr('value', '');
//       inputValue = '';
//     });
//   });

//   $(document).click((e) => {
//     $dropdown__wrapper.each((i) => {
//       if (!$dropdown__wrapper.eq(i).is(e.target) && $dropdown__wrapper.eq(i).has(e.target).length === 0) {
//         $dropdown__wrapper.eq(i).find('.dropdown__arrow').text('expand_more');
//         $dropdown__wrapper.eq(i).removeClass('dropdown__wrapper_expanded');
//       }
//     });
//   });
// });
