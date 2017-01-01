import jwt_decode from 'jwt-decode';
import moment from 'moment';
import _ from 'lodash';

export default function ($window) {
    'ngInject';

    let store = $window.localStorage;
    let tokenKey = 'auth-token';
    let userKey = 'user';

    return {
        getToken: getToken,
        setToken: setToken,
        isAuthenticated: isAuthenticated,
        isExpired: isExpired
    };

    function getToken() {
        return store.getItem(tokenKey);
    }

    function setToken(token) {
        if (token) {
            store.setItem(tokenKey, token);
        } else {
            store.removeItem(tokenKey);
        }
    }

    function isExpired() {
        let expired = false;

        if (_.isNull(getToken())) {
            expired = false;
        } else {
            let tokenExpiration = jwt_decode(getToken()).exp;
            let diff = moment().diff(moment.unix(tokenExpiration));
            if (diff > 0) {
                expired = true;
            }
        }
        return expired;
    }

    function isAuthenticated() {
        // TODO also ensure valid conforming to the rules of JWT
        if (getToken()) {
            return true;
        }

        return false;

    }

}