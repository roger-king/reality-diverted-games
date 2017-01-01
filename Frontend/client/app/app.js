import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularAnimate from 'angular-animate';
import angularMaterial from 'angular-material';
import angularMessages from 'angular-messages';
import angularFilter from 'angular-filter';
import mdTable from 'angular-material-data-table';

import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import AuthTokenFactory from './common/services/authtoken.factory';

import 'normalize.css';
import 'angular-material/angular-material.css';
import 'angular-material-data-table/dist/md-data-table.min.css';

angular.module('app', [angularMaterial,
    angularMessages,
    angularAnimate,
    angularFilter,
    mdTable,
    uiRouter,
    Common.name,
    Components.name
])
    .constant('API_URL', '//localhost:3000')
    .config(($locationProvider) => {
        'ngInject';
        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode(false);
    })

    .factory('AuthTokenFactory', AuthTokenFactory)
    .component('app', AppComponent);
/*    .run(function ($rootScope, $state, AuthTokenFactory) {
        'ngInject';
        // if the token is expired redirect to login page
        if (AuthTokenFactory.isExpired === true) {
            $rootScope.isAdmin = false;
        }else{
            $rootScope.isAdmin = true;
        }
        // this is to prevent loading the login
        let logoutRedirectOnce = false;
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            // TODO: add modal to inform the user they were kicked because their token expired
            if (AuthTokenFactory.isExpired() === true && !logoutRedirectOnce) {
                logoutRedirectOnce = true;
                $rootScope.isAdmin = false;
                event.preventDefault();
            }
            if (toState.authenticate && !AuthTokenFactory.isAuthenticated()) {
                $rootScope.isAdmin = false;
                event.preventDefault();
            }
        });
    });*/
