import '../../variables.scss';
import './slider.scss';
import './slider.pug';
import '../../../node_modules/jquery-ui/ui/widgets/slider.js';
import $ from 'jquery';

$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 17000,
      values: [ 5000, 10000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.values[ 0 ] + "₽" + " - " + ui.values[ 1 ]  + "₽");
      }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) + "₽" +
      " - " + $( "#slider-range" ).slider( "values", 1 ) + "₽");
  } );