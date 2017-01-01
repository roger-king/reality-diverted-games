export default function(AuthTokenFactory) {
    'ngInject';

    return {
        request: addToken
    };

    function addToken(config) {
        var token = AuthTokenFactory.getToken();
        if (token) {
            config.headers = config.headers || {};
            config.headers.authorization = token;

        }
        return config;
    }

}