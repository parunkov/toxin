import '../../variables.scss';
import './pagination.pug';
import './pagination.scss';
import '../../../node_modules/paginationjs/src/pagination';
import $ from 'jquery';

class Pagination {
  constructor(pagination) {
    this.$pagination = pagination;
    this.$container = pagination.find('#pagination-container');
    this.$first = pagination.find('.pagination__first');
    this.$second = pagination.find('.pagination__second');
    this.init();
  }
  init() {
    const setHtml = (a, b) => {
      this.$first.html(a);
      this.$second.html(b);
    }
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

const pagination = new Pagination($('.pagination'));




// $(document).ready(() => {
//   $(() => {
//     (function () {
//       const $container = $('#pagination-container');
//       const sources = (function () {
//         const result = [];

//         for (let i = 0; i < 180; i += 1) {
//           result.push(i);
//         }

//         return result;
//       }());

//       const options = {
//         dataSource: sources,
//         pageSize: 12,
//         pageRange: 1,
//         autoHidePrevious: true,
//         autoHideNext: true,
//         callback(response, pagination) {
//           $('.pagination__first').html(pagination.pageNumber * pagination.pageSize - pagination.pageSize + 1);
//           $('.pagination__second').html(pagination.pageNumber * pagination.pageSize);
//         },
//       };
//       console.log($container.pagination);
//       $container.pagination(options);
//     }());
//   });
// });
