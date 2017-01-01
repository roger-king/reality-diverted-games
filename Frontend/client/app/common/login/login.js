import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginComponent from './login.component';
import AuthToken from '../services/authtoken.factory';
import AuthInterceptor from '../services/authinterceptor.factory';
import LoginFactory from './login.factory';

let loginModule = angular.module('login', [
    uiRouter
])
    .factory('LoginFactory', LoginFactory)
    .factory('AuthToken', AuthToken)
    .factory('AuthInterceptor', AuthInterceptor)
    .component('login', loginComponent);

export default loginModule;
