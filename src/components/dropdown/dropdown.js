import '../../variables.scss';
import './dropdown.scss';
import './dropdown.pug';
import $ from 'jquery';
import { dropdownTexts } from '../../commonData/commonData';
import '../title/title';
import Counter from './counter';

const num2str = function (num, textForms) {
  const n = Math.abs(num) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) { return textForms[2]; }
  if (n1 > 1 && n1 < 5) { return textForms[1]; }
  if (n1 === 1) { return textForms[0]; }
  return textForms[2];
};

class Dropdown {
  constructor(dropdown) {
    this.$dropdown = dropdown;
    this.counters = [];
    this.total = 0;
    this.$wrapper = dropdown.find('.js-dropdown__inner');
    this.$arrow = dropdown.find('.js-dropdown__arrow');
    this.$input = dropdown.find('.js-dropdown__input');
    this.type = dropdown.find('.js-dropdown__item-text').html();
    this.$setButton = dropdown.find('.js-dropdown__set-button');
    this.$clearButton = dropdown.find('.js-dropdown__clear-button');
    this.init();
  }

  init() {
    this.setPlaceholder();

    const $controls = this.$dropdown.find('.js-dropdown__item-controls');

    const onArrowClick = () => {
      if (this.$arrow.text() === 'expand_more') {
        this.$arrow.text('expand_less');
        this.$wrapper.addClass('dropdown__inner_expanded');
      } else {
        this.$arrow.text('expand_more');
        this.$wrapper.removeClass('dropdown__inner_expanded');
      }
    };
    if (!this.$dropdown.hasClass('dropdown_theme_date')) {
      this.$arrow.click(onArrowClick);
    }
    $controls.each((i) => {
      this.counters[i] = new Counter(this.$dropdown.find('.js-dropdown__item-controls').eq(i));
    });
    const onControlsClick = (() => {
      this.total = 0;
      for (let i = 0; i < this.counters.length; i += 1) {
        this.total += this.counters[i].value;
      }
      this.$input.attr('value', this.setValue());
      if (this.$input.attr('value')) {
        this.$clearButton.addClass('dropdown__clear-button_visible');
      }
      if (this.total === 0) {
        this.$clearButton.removeClass('dropdown__clear-button_visible');
      }
    });
    $controls.each((i) => {
      this.$dropdown.find('.js-dropdown__item-controls').eq(i).click(onControlsClick);
    });

    this.$setButton.click((e) => this.setButtonClick(e));
    this.$clearButton.click((e) => this.clearButtonClick(e));
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
    if (this.type === dropdownTexts.type) {
      const textPart0 = `${this.counters[0].value} ${num2str(+this.counters[0].value, dropdownTexts.variants1)}`;
      const textPart1 = `${this.counters[1].value} ${num2str(+this.counters[1].value, dropdownTexts.variants4)}`;
      const textPart2 = `${this.counters[2].value} ${num2str(+this.counters[2].value, dropdownTexts.variants2)}`;

      inputValue = '';
      if (this.counters[0].value) {
        inputValue += textPart0;
      }
      if (this.counters[1].value) {
        if (this.counters[0].value) {
          inputValue = `${inputValue}, `;
        }
        inputValue += textPart1;
      }
      if (this.counters[2].value) {
        if (this.counters[0].value || this.counters[1].value) {
          inputValue = `${inputValue}, `;
        }
        inputValue += textPart2;
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

  setButtonClick(e) {
    e.preventDefault();
    this.$arrow.text('expand_more');
    this.$wrapper.removeClass('dropdown__inner_expanded');
    this.setValue();
  }

  clearButtonClick(e) {
    e.preventDefault();
    this.total = 0;
    this.$dropdown.find('.dropdown__counter').html('0');
    this.$clearButton.removeClass('dropdown__clear-button_visible');
    this.setValue();
    this.$input.attr('value', '');
    for (let i = 0; i < this.counters.length; i += 1) {
      this.counters[i].$decrementButton.addClass('dropdown__counter-button_inactive');
      this.counters[i].value = 0;
    }
  }

  documentClick(e) {
    if (!this.$dropdown.hasClass('dropdown_theme_date')) {
      if (!this.$wrapper.is(e.target) && this.$wrapper.has(e.target).length === 0) {
        this.$arrow.text('expand_more');
        this.$wrapper.removeClass('dropdown__inner_expanded');
      }
    }
  }
}

export default Dropdown;
