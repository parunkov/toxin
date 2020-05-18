import '../../variables.scss';
import './pagination.scss';
import '../../../node_modules/paginationjs/src/pagination';
import $ from 'jquery';

$(() => {
  (function () {
    const $container = $('#pagination-container');
    const sources = (function () {
      const result = [];

      for (let i = 0; i < 180; i += 1) {
        result.push(i);
      }

      return result;
    }());

    const options = {
      dataSource: sources,
      pageSize: 12,
      pageRange: 1,
      autoHidePrevious: true,
      autoHideNext: true,
      callback(response, pagination) {
        $('.pagination__first').html(pagination.pageNumber * pagination.pageSize - pagination.pageSize + 1);
        $('.pagination__second').html(pagination.pageNumber * pagination.pageSize);
      },
    };
    $container.pagination(options);
  }());
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
