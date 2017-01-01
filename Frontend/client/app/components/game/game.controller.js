class GameController {
    constructor(BoardGameFactory, $stateParams, $scope) {
        'ngInject';
        let vm = this;
        vm.init = () => {
            vm.rating = 5;
            BoardGameFactory.get($stateParams.id).then(function(response){
                vm.game =  response.data.data[0];
                vm.rating = vm.game.rating/2;
            })
        };

    }
}

export default GameController;
