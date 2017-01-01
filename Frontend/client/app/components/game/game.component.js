import template from './game.html';
import controller from './game.controller';
import './game.scss';

let gameComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default gameComponent;
