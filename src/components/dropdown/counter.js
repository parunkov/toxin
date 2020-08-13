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
    this.$decrementBtn.addClass('dropdown__counter-button_inactive');

    const onIncrementClick = (evt) => {
      evt.preventDefault();
      this.value += 1;
      this.$count.html(this.value);
      this.$decrementBtn.removeClass('dropdown__counter-button_inactive');
    };
    const onDecrementClick = (evt) => {
      evt.preventDefault();
      this.$decrementBtn.addClass('dropdown__counter-button_inactive');
      if (this.value > 1) {
        this.$decrementBtn.removeClass('dropdown__counter-button_inactive');
        this.value -= 1;
      } else if (this.value > 0) {
        this.value -= 1;
      } else {
        this.value = 0;
      }
      this.$count.html(this.value);
    };

    this.$incrementBtn.click((evt) => onIncrementClick(evt));
    this.$decrementBtn.click((evt) => onDecrementClick(evt));
  }
}

export default Counter;
