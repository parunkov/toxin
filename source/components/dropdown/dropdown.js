import '../../variables.scss';
import './dropdown.scss';
import './dropdown.pug';

const num2str = function (num, textForms) {
  const n = Math.abs(num) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) { return textForms[2]; }
  if (n1 > 1 && n1 < 5) { return textForms[1]; }
  if (n1 === 1) { return textForms[0]; }
  return textForms[2];
};

$(document).ready(() => {
  const $iqdropdown = $('.iqdropdown');

  $iqdropdown.each((i) => {
    const $type = $('.dropdown__type');
    const $counter = $iqdropdown.eq(i).find('.counter');
    const $decrementBtn = $iqdropdown.eq(i).find('.button-decrement');
    const $incrementBtn = $iqdropdown.eq(i).find('.button-increment');
    const $text = $('.iqdropdown-selection');
    const $dropdownClear = $iqdropdown.eq(i).find('.dropdown__clear');
    console.log($dropdownClear);

    let totalCount = 0;
    let inputValue = '';


    $type.each((j) => {
      if ($type.eq(j).html() === 'rooms') {
        $text.eq(j).attr('value', '0 спален, 0 кроватей, 0 ванных');
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
          $dropdownClear.css({ display: 'block' });
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
        if (!totalCount) {
          $dropdownClear.css({ display: 'none' });
        }
        $counter.eq(j).html(count);
      });
    });

    const opacytyBtn = function () {
      for (let j = 0; j < $counter.length; j += 1) {
        if ($counter.eq(j).html() === '0') {
          $decrementBtn.eq(j).css({ opacity: '0.5' });
          $decrementBtn.eq(j).css({ cursor: 'default' });
        } else {
          $decrementBtn.eq(j).css({ opacity: '1' });
          $decrementBtn.eq(j).css({ cursor: 'pointer' });
        }
      }
    };
    opacytyBtn();

    $iqdropdown.eq(i).find('.input__icon-dropdown').click(() => {
      if ($iqdropdown.eq(i).find('.input__icon-dropdown-text').text() === 'expand_more') {
        $iqdropdown.eq(i).find('.input__icon-dropdown-text').text('expand_less');
        $iqdropdown.eq(i).attr('style', 'border-radius: 4px 4px 0 0;');
      } else {
        $iqdropdown.eq(i).find('.input__icon-dropdown-text').text('expand_more');
        $iqdropdown.eq(i).attr('style', '');
      }
      $iqdropdown.eq(i).toggleClass('menu-open');
    });

    $iqdropdown.eq(i).find('button').click(() => {
      opacytyBtn();

      const $itemCounter = $('.iqdropdown-menu').eq(i).find('.counter');
      if ($type.eq(i).html() === 'rooms') {
        const textPart0 = `${$itemCounter[0].innerHTML} ${num2str(+$itemCounter[0].innerHTML, ['спальня', 'спальни', 'спален'])},`;
        const textPart1 = `${$itemCounter[1].innerHTML} ${num2str(+$itemCounter[1].innerHTML, ['кровать', 'кровати', 'кроватей'])},`;
        const textPart2 = `${$itemCounter[2].innerHTML} ${num2str(+$itemCounter[2].innerHTML, ['ванная', 'ванные', 'ванных'])}`;

        $('.iqdropdown-selection').eq(i).attr('value', `${textPart0} ${textPart1} ${textPart2}`);
        inputValue = `${textPart0} ${textPart1} ${textPart2}`;
      } else {
        const guestsNumber = +$itemCounter[0].innerHTML + +$itemCounter[1].innerHTML + +$itemCounter[2].innerHTML;
        const babyNumber = +$itemCounter[2].innerHTML;
        inputValue = `${guestsNumber} ${num2str(+guestsNumber, ['гость', 'гостя', 'гостей'])}`;
        if (babyNumber) {
          const inputText = inputValue;
          // $('.iqdropdown-selection').eq(i).attr('value', inputText + ', ' + babyNumber + ' ' + num2str(+babyNumber, ['младенец', 'младенца', 'младенцев']));
          inputValue = `${inputText}, ${babyNumber} ${num2str(+babyNumber, ['младенец', 'младенца', 'младенцев'])}`;
        }
      }
    });

    $iqdropdown.eq(i).find('.dropdown__set').click(() => {
      $iqdropdown.eq(i).find('.input__icon-dropdown-text').text('expand_more');
      $iqdropdown.eq(i).attr('style', '');
      $iqdropdown.eq(i).removeClass('menu-open');
      $iqdropdown.eq(i).find('.iqdropdown-selection').attr('value', inputValue);
    });
    $iqdropdown.eq(i).find('.dropdown__clear').click(() => {
      $iqdropdown.eq(i).find('.counter').html('0');
      $dropdownClear.css({ display: 'none' });
      opacytyBtn();
      $iqdropdown.eq(i).find('.iqdropdown-selection').attr('placeholder', 'Сколько гостей');
      $iqdropdown.eq(i).find('.iqdropdown-selection').attr('value', '');
      inputValue = '';
    });
  });
});
