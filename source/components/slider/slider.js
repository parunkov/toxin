import '../../variables.scss';
import './slider.scss';
import './slider.pug';
// import '../../../../node_modules/jquery-ui/widgets/slider.js';
import '../../../node_modules/jquery-ui/ui/widgets/slider.js';
import $ from 'jquery';

$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );