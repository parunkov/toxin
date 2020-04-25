import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../components/page/page';
import '../../components/page_header/page_header';
import '../../components/like/like';
import '../../components/review/review';
import '../../components/page_footer/page_footer';
import '../../components/info/info';
import '../../components/room/room';
import './room_details.scss';
import './room1.jpg';
import './room2.jpg';
import './room3.jpg';
import './Patricia.jpg';
import $ from 'jquery';

$('.room_details__revew-1-like').prop('checked', true);

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
    color: 'transparent',
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
addCart(dataset1, '.room_details__chart', 'room_details__sector');
addCart(dataset2, '.room_details__chart-2', 'room_details__sector');
