export default function($http, API_URL){
	'ngInject';

	let api = '/api/boardgames';

	let find = () => {
		const endpoint = API_URL + api;
		
		return $http.get(endpoint);
	};

	// find by gameid
	let get = (id) => {
        const endpoint = API_URL + api + "?gameId=" + id;
		return $http.get(endpoint);
	};

	return{
        find,
        get
	}
}