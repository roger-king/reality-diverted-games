import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import bgFactory from './../../common/services/boardgame.service';

let homeModule = angular.module('home', [
  uiRouter
])


.config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            template: '<home></home>'
        })
})

.factory('BoardGameFactory', bgFactory)
.component('home', homeComponent);

export default homeModule;
