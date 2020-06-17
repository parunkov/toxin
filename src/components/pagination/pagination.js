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
