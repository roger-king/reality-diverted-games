import angular from 'angular';
import Navbar from './navbar/navbar';
import StarRating from './starRating/starRating';
import Login from './login/login';

export default angular.module('app.common', [
    Navbar.name,
    StarRating.name,
    Login.name
]);
