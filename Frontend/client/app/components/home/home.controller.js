class HomeController {
  constructor(BoardGameFactory, $scope, $mdPanel) {
  	'ngInject';
    let vm = this;
    vm.atTop = true;
    vm._mdPanel = $mdPanel;
    BoardGameFactory.find().then(function(response){
    	console.log(response.data.data);
    	vm.games = response.data.data;
    });

    vm.isSearching = () => {
        if(vm.gameSearch){
            console.log("Searching....");
            vm.atTop = false;
        } else{
            console.log("emptied");
            vm.atTop = true;
        }
    };
    vm.showLogin = (ev) => {
        let position = vm._mdPanel.newPanelPosition()
            .relativeTo('.admin-btn')
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

export default HomeController;
