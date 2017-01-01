"use strict";
const jwt_decode = require('jwt-decode');

module.exports = function($window){
    'ngInject';

    let store = $window.localStorage;

    let getUser = () =>{
        if(store.getItem('auth-token') != null){
            return jwt_decode(store.getItem('auth-token'));
        }
    };

    return{
        getUser
    }
};