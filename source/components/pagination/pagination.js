import '../../variables.scss';
import './pagination.scss';
import '../../../node_modules/paginationjs/src/pagination.js';
// import '../../../node_modules/paginationjs/dist/pagination.css';

$(function() {
  (function(name) {
    var container = $('#pagination-container');
    var sources = function () {
      var result = [];

      for (var i = 0; i < 180; i++) {
        result.push(i);
      }

      return result;
    }();

    var options = {
      dataSource: sources,
      pageSize: 12,
      pageRange: 1,
      autoHidePrevious: true,
      autoHideNext: true,
      callback: function (response, pagination) {
      }
    };
    // console.log(container.pagination);
    container.pagination(options);

  })();

});



// $(function() {
//     $(selector).pagination({
//         items: 100,
//         itemsOnPage: 10,
//         cssStyle: 'light-theme'
//     });
// });






// import '../../../node_modules/paginationjs/dist/pagination.js';
// // import '../../../node_modules/paginationjs/dist/pagination.css';
// import $ from 'jquery';
// // // import '../../../node_modules/jquery/dist/jquery.js';

// $('#pagination-container').pagination({
//     // dataSource: [1, 2, 3, 4, 5, 6, 7, ... , 195],
//     callback: function(data, pagination) {
//         // template method of yourself
//         var html = template(data);
//         $('#data-container').html(html);
//     }
// });
// // // function simpleTemplating(data) {
// // //     var html = '<ul>';
// // //     $.each(data, function(index, item){
// // //         html += '<li>'+ item +'</li>';
// // //     });
// // //     html += '</ul>';
// // //     return html;
// // // }
// // // $('#pagination-container').pagination({
// // //     dataSource: [1, 2, 3, 4, 5, 6, 7, ... , 195],
// // //     callback: function(data, pagination) {
// // //         var html = simpleTemplating(data);
// // //         $('#data-container').html(html);
// // //     }
// // // })