import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gameComponent from './game.component';
import bgFactory from './../../common/services/boardgame.service';

let gameModule = angular.module('game', [
    uiRouter
])

    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('gameInfo', {
                url: '/boardgame/:id',
                template: '<game></game>'
            })
    })

    .factory('BoardGameFactory', bgFactory)
    .component('game', gameComponent);

export default gameModule;
