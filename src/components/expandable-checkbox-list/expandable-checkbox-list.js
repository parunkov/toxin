import '../checkbox-list/checkbox-list';
import '../title/title';
import './expandable-checkbox-list.scss';
import $ from 'jquery';

class ExpandableCheckboxList {
  constructor(list) {
    this.$list = list;
    this.$tite = list.find('.js-expandable-checkbox-list__title');
    this.$text = list.find('.js-expandable-checkbox-list__text');
    this.init();
  }

  init() {
    this.$tite.click((evt) => {
      evt.preventDefault();
      this.$text.toggleClass('expandable-checkbox-list__text_hidden');
      this.$tite.toggleClass('expandable-checkbox-list__title_rotate');
    });
  }
}

const lists = [];

$('.js-expandable-checkbox-list').each((i) => {
  lists[i] = new ExpandableCheckboxList($('.js-expandable-checkbox-list').eq(i));
});
