import '../../../node_modules/reset-css/sass/_reset.scss';
import '../../variables.scss';
import '../../components/page/page.js';
import '../../components/page_header/page_header.js';
import '../../components/like/like.js';
import '../../components/review/review.js';
import '../../components/page_footer/page_footer.js';
import '../../components/info/info.js';
import './room_details.scss';
import './room1.jpg';
import './room2.jpg';
import './room3.jpg';
import './Patricia.jpg';

$('.room_details__revew-1-like').prop('checked', true);

let dataset1 = [
	{
		value: 0.5,
		color: '#ffffff'
	},
	{
		value: 24,
		color: '#bc9cff'
	}, 
	{
		value: 1,
		color: '#ffffff'
	},
	{
		value: 24,
		color: '#6fcf97'
	}, 
	{
		value: 1,
		color: '#ffffff'
	},
	{
		value: 24,
		color: '#ffcd9c'
	},
	{
		value: 1,
		color: '#ffcd9c'
	},
	{
		value: 24,
		color: '#ffcd9c'
	}
];
let dataset2 = [
	{
		value: 0.5,
		color: '#ffffff'
	},	
	{
		value: 24,
		color: 'transparent'
	},
	{
		value: 1,
		color: '#ffffff'
	},
	{
		value: 24,
		color: '#ffffff'
	}, 
	{
		value: 1,
		color: '#ffffff'
	},
	{
		value: 24,
		color: '#ffffff'
	},
	{
		value: 1,
		color: '#ffffff'
	},
	{
		value: 24,
		color: '#ffffff'
	}
];
let addCart = function(dataset, chartClass, sectorClass) {
	let maxValue = 25;
	let container = $(chartClass);

	let addSector = function(data, startAngle, collapse) {
		let sectorDeg = 3.6 * data.value;
		let skewDeg = 90 + sectorDeg;
		let rotateDeg = startAngle;
		if (collapse) {
			skewDeg++;
		}

		let sector = $('<div>', {
			'class': sectorClass
		}).css({
			'background': data.color,
			'transform': 'rotate(' + rotateDeg + 'deg) skewY(' + skewDeg + 'deg)'
		});
		container.append(sector);

		return startAngle + sectorDeg;
	};

	dataset.reduce(function (prev, curr) {
		return (function addPart(data, angle) {
			if (data.value <= maxValue) {
				return addSector(data, angle, false);
			}

			return addPart({
				value: data.value - maxValue,
				color: data.color
			}, addSector({
				value: maxValue,
				color: data.color,
			}, angle, true));
		})(curr, prev);
	}, 0);
}
addCart(dataset1, '.room_details__chart', 'room_details__sector');
addCart(dataset2, '.room_details__chart-2', 'room_details__sector');