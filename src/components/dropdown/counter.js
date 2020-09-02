class Counter {
  constructor(counter) {
    this.$counter = counter;
    this.$incrementButton = counter.find('.dropdown__counter-button_theme_increment');
    this.$decrementButton = counter.find('.dropdown__counter-button_theme_decrement');
    this.$count = counter.find('.dropdown__counter');
    this.value = 0;
    this.init();
  }

  init() {
    this.$decrementButton.addClass('dropdown__counter-button_inactive');

    const onIncrementClick = (evt) => {
      evt.preventDefault();
      this.value += 1;
      this.$count.html(this.value);
      this.$decrementButton.removeClass('dropdown__counter-button_inactive');
    };
    const onDecrementClick = (evt) => {
      evt.preventDefault();
      this.$decrementButton.addClass('dropdown__counter-button_inactive');
      if (this.value > 1) {
        this.$decrementButton.removeClass('dropdown__counter-button_inactive');
        this.value -= 1;
      } else if (this.value > 0) {
        this.value -= 1;
      } else {
        this.value = 0;
      }
      this.$count.html(this.value);
    };

    this.$incrementButton.click((evt) => onIncrementClick(evt));
    this.$decrementButton.click((evt) => onDecrementClick(evt));
  }
}

export default Counter;
