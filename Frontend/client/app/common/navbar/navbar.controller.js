class NavbarController {
    constructor() {
    	'ngInject';
    	
        this.name = 'navbar';

        this.login = () => {
            $mdDialog.show({
                controller: loginController,
                template: loginTemplate,
                controllerAs: 'vm',
                clickOutsideToClose: true
            })
        };
    }
}

export default NavbarController;
