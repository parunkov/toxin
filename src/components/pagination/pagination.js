import '../../variables.scss';
import './pagination.pug';
import './pagination.scss';
import '../../../node_modules/paginationjs/src/pagination';
import $ from 'jquery';

class Pagination {
  constructor(pagination) {
    this.$pagination = pagination;
    this.$container = pagination.find('#pagination-container');
    this.$first = pagination.find('.js-pagination__first');
    this.$second = pagination.find('.js-pagination__second');
    this.init();
  }

  init() {
    const setHtml = (a, b) => {
      this.$first.html(a);
      this.$second.html(b);
    };
    $(() => {
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
          const a = pagination.pageNumber * pagination.pageSize - pagination.pageSize + 1;
          const b = pagination.pageNumber * pagination.pageSize;
          setHtml(a, b);
        },
      };
      this.$container.pagination(options);
    });
  }
}

new Pagination($('.js-pagination'));
