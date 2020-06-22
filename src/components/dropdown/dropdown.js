import '../../variables.scss';
import './dropdown.scss';
import './dropdown.pug';
import $ from 'jquery';

const num2str = function (num, textForms) {
  const n = Math.abs(num) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) { return textForms[2]; }
  if (n1 > 1 && n1 < 5) { return textForms[1]; }
  if (n1 === 1) { return textForms[0]; }
  return textForms[2];
};

$(document).ready(() => {
  const $dropdown__wrapper = $('.dropdown:not(.dropdown_theme_date)').find('.dropdown__wrapper');

  $dropdown__wrapper.each((i) => {
    const $dropdown = $('.dropdown');
    const $counter = $dropdown__wrapper.eq(i).find('.dropdown__counter');
    const $decrementBtn = $dropdown__wrapper.eq(i).find('.dropdown__counter-button_theme_decrement');
    const $incrementBtn = $dropdown__wrapper.eq(i).find('.dropdown__counter-button_theme_increment');
    const $text = $('.dropdown__input');
    const $dropdownClear = $dropdown__wrapper.eq(i).find('.dropdown__clear-btn');

    let totalCount = 0;
    let inputValue = '';

    $dropdown.each((j) => {
      const type = $dropdown.eq(j).find('.dropdown__item-text').html();
      if (type === 'спальни') {
        $text.eq(j).attr('value', '0 спален, 0 кроватей, 0 ванных');
      } else if (!type) {
        $text.eq(j).attr('placeholder', 'дд.мм.гггг');
      } else {
        $text.eq(j).attr('placeholder', 'Сколько гостей');
      }
    });


    $counter.each((j) => {
      $incrementBtn.eq(j).click((evt) => {
        evt.preventDefault();
        let count = +$counter.eq(j).html();
        count += 1;
        $counter.eq(j).html(count);
        totalCount += 1;
        // console.log(totalCount);
        if (totalCount) {
          $dropdownClear.addClass('dropdown__clear-btn_visible');
        }
      });
      $decrementBtn.eq(j).click((evt) => {
        evt.preventDefault();
        let count = +$counter.eq(j).html();
        if (count <= 0) {
          count = 0;
        } else {
          count -= 1;
          totalCount -= 1;
        }
        // console.log(totalCount);
        if (!totalCount) {
          $dropdownClear.removeClass('dropdown__clear-btn_visible');
        }
        $counter.eq(j).html(count);
      });
    });

    const opacytyBtn = function () {
      for (let j = 0; j < $counter.length; j += 1) {
        if ($counter.eq(j).html() === '0') {
          $decrementBtn.eq(j).addClass('dropdown__counter-button_theme_decrement-inactive');
        } else {
          $decrementBtn.eq(j).removeClass('dropdown__counter-button_theme_decrement-inactive');
        }
      }
    };
    opacytyBtn();

    $dropdown__wrapper.eq(i).find('.dropdown__arrow').click(() => {
      if ($dropdown__wrapper.eq(i).find('.dropdown__arrow').text() === 'expand_more') {
        $dropdown__wrapper.eq(i).find('.dropdown__arrow').text('expand_less');
        $dropdown__wrapper.eq(i).addClass('dropdown__wrapper_expanded');
      } else {
        $dropdown__wrapper.eq(i).find('.dropdown__arrow').text('expand_more');
        $dropdown__wrapper.eq(i).removeClass('dropdown__wrapper_expanded');
      }
    });

    $dropdown__wrapper.eq(i).find('button').click(() => {
      opacytyBtn();

      const $itemCounter = $('.dropdown__menu').eq(i).find('.dropdown__counter');
      const type = $dropdown.eq(i).find('.dropdown__item-text').html();
      if (type === 'спальни'){
        const textPart0 = `${$itemCounter[0].innerHTML} ${num2str(+$itemCounter[0].innerHTML, ['спальня', 'спальни', 'спален'])},`;
        const textPart1 = `${$itemCounter[1].innerHTML} ${num2str(+$itemCounter[1].innerHTML, ['кровать', 'кровати', 'кроватей'])},`;
        const textPart2 = `${$itemCounter[2].innerHTML} ${num2str(+$itemCounter[2].innerHTML, ['ванная', 'ванные', 'ванных'])}`;

        $('.dropdown__input').eq(i).attr('value', `${textPart0} ${textPart1} ${textPart2}`);
        inputValue = `${textPart0} ${textPart1} ${textPart2}`;
      } else {
        const guestsNumber = +$itemCounter[0].innerHTML
        + +$itemCounter[1].innerHTML
        + +$itemCounter[2].innerHTML;
        const babyNumber = +$itemCounter[2].innerHTML;
        inputValue = `${guestsNumber} ${num2str(+guestsNumber,
          ['гость', 'гостя', 'гостей'])}`;
        if (babyNumber) {
          const inputText = inputValue;
          inputValue = `${inputText}, ${babyNumber} ${num2str(+babyNumber, ['младенец', 'младенца', 'младенцев'])}`;
        }
      }
    });

    $dropdown__wrapper.eq(i).find('.dropdown__set-btn').click((e) => {
      e.preventDefault();
      $dropdown__wrapper.eq(i).find('.dropdown__arrow').text('expand_more');
      $dropdown__wrapper.eq(i).removeClass('dropdown__wrapper_expanded');
      $dropdown__wrapper.eq(i).find('.dropdown__input').attr('value', inputValue);
    });
    $dropdown__wrapper.eq(i).find('.dropdown__clear-btn').click((e) => {
      e.preventDefault();
      totalCount = 0;
      $dropdown__wrapper.eq(i).find('.dropdown__counter').html('0');
      $dropdownClear.removeClass('dropdown__clear-btn_visible');
      opacytyBtn();
      $dropdown__wrapper.eq(i).find('.dropdown__input').attr('placeholder', 'Сколько гостей');
      $dropdown__wrapper.eq(i).find('.dropdown__input').attr('value', '');
      inputValue = '';
    });
  });
});
