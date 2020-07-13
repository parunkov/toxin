import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../components/page/page';
import '../../components/header/header';
import '../../components/like/like';
import '../../components/review/review';
import '../../components/footer/footer';
import '../../components/info/info';
import '../../components/reservation-form/reservation-form';
import './room-details.scss';
import './images/room1.jpg';
import './images/room2.jpg';
import './images/room3.jpg';
import './images/Patricia.jpg';
import $ from 'jquery';

$('.js-room-details__review-wrapper_1 .js-like__input').prop('checked', true);

const dataset1 = [
  {
    value: 0.5,
    color: '#ffffff',
  },
  {
    value: 24,
    color: 'linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%)',
  },
  {
    value: 1,
    color: '#ffffff',
  },
  {
    value: 24,
    color: 'linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%)',
  },
  {
    value: 1,
    color: '#ffffff',
  },
  {
    value: 25,
    color: 'linear-gradient(180deg, #ffba9c 0%, #ffcd9c 100%)',
  },
  {
    value: 24,
    color: 'linear-gradient(180deg, #ffcd9c 0%, #ffe39c 100%)',
  },
];
const dataset2 = [
  {
    value: 0.5,
    color: '#ffffff',
  },
  {
    value: 24,
    color: '#ffffff',
  },
  {
    value: 1,
    color: '#ffffff',
  },
  {
    value: 24,
    color: '#ffffff',
  },
  {
    value: 1,
    color: '#ffffff',
  },
  {
    value: 49,
    color: '#ffffff',
  },
];
const addCart = function (dataset, chartClass, sectorClass) {
  const maxValue = 25;
  const container = $(chartClass);

  const addSector = function (data, startAngle, collapse) {
    const sectorDeg = 3.6 * data.value;
    let skewDeg = 90 + sectorDeg;
    const rotateDeg = startAngle;
    if (collapse) {
      skewDeg += 1;
    }

    const sector = $('<div>', {
      class: sectorClass,
    }).css({
      background: data.color,
      transform: `rotate(${rotateDeg}deg) skewY(${skewDeg}deg)`,
    });
    container.append(sector);

    return startAngle + sectorDeg;
  };

  dataset.reduce((prev, curr) => (function addPart(data, angle) {
    if (data.value <= maxValue) {
      return addSector(data, angle, false);
    }

    return addPart({
      value: data.value - maxValue,
      color: data.color,
    }, addSector({
      value: maxValue,
      color: data.color,
    }, angle, true));
  }(curr, prev)), 0);
};
addCart(dataset1, '.js-room-details__chart', 'js-room-details__sector');
addCart(dataset2, '.js-room-details__chart-white-mask', 'js-room-details__sector');

const $sectors = $('.js-room-details__sector');
const $masks = $('.js-room-details__chart-white-mask .js-room-details__sector');
const $chartText = $('.js-room-details__chart-inner');
const $chartNumber = $('.js-room-details__chart-number');
const onSectorHover = (numbers, color, text) => {
  numbers.forEach((i) => {
    const onHover = () => {
      $masks.css({'background' : '#ffffff'});
      numbers.forEach((j) => {
        $masks.eq(j).css({'background' : 'transparent'});
      });
      $chartText.css({'color': color});
      $chartNumber.text(text);
    }
    const onLeave = () => {
      $masks.css({'background' : '#ffffff'});
      $chartText.css({'color': 'rgba(31, 32, 65, 0.5)'});
      $chartNumber.text('1050');
    }
    $sectors.eq(i).hover(onHover, onLeave);
    $masks.eq(i).hover(onHover, onLeave);
  });
}

onSectorHover([1], '#bc9cff', '260');
onSectorHover([3], '#6fcf97', '270');
onSectorHover([5, 6], '#ffcd9c', '520');
