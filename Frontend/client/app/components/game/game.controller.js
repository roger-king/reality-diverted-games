class GameController {
    constructor(BoardGameFactory, $stateParams, $scope, $state, $mdPanel) {
        'ngInject';
        let vm = this;
        vm.init = () => {
            vm.rating = 5;
            BoardGameFactory.get($stateParams.id).then(function(response){
                vm.game =  response.data.data[0];
                vm.rating = vm.game.rating/2;
            })
        };

        vm.goBack = () => {
            $state.go('home');
        };

        vm.showLogin = (ev) => {
            vm._mdPanel = $mdPanel;
            let position = vm._mdPanel.newPanelPosition()
                .relativeTo('.login-btn')
                .addPanelPosition(vm._mdPanel.xPosition.OFFSET_START, vm._mdPanel.yPosition.BELOW);

            var config = {
                attachTo: angular.element(document.body),
                template:'<login></login>',
                panelClass: 'home-login-panel',
                position: position,
                locals: {
                    'selected': this.selected,
                    'desserts': this.desserts
                },
                openFrom: ev,
                clickOutsideToClose: true,
                escapeToClose: true,
                focusOnOpen: false,
                zIndex: 2
            };

            this._mdPanel.open(config);
        }
    }
}

export default GameController;
