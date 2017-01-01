import template from './starRating.html';
import controller from './starRating.controller';
import './starRating.scss';

let starRatingComponent = {
  restrict: 'E',
  bindings: {
    rate: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default starRatingComponent;
