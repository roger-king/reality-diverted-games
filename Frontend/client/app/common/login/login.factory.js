export default function($http, API_URL, AuthTokenFactory){
    'ngInject';
    function login(user, password){
        const endpoint = API_URL + '/auth/local';
        return $http.post(endpoint,{
            user: user,
            password: password
        }).then(function success(response){
            AuthTokenFactory.setToken(response.data.token);
            return response;
        })
    }

    return{
        login: login
    }
}