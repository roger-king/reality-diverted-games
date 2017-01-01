import angular from 'angular';
import Home from './home/home';
import Game from './game/game';


export default angular.module('app.components', [
	Home.name,
	Game.name
]);
