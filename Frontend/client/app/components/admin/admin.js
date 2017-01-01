import angular from 'angular';
import uiRouter from 'angular-ui-router';
import adminComponent from './admin.component';

let adminModule = angular.module('admin', [
  uiRouter
])

.component('admin', adminComponent);

export default adminModule;
