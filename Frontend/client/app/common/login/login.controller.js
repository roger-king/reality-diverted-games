class LoginController {
  constructor($rootScope, LoginFactory) {
      'ngInject';
      let handleError = (response) => {
          $mdDialog.show(
              $mdDialog.alert()
                  .clickOutsideToClose(true)
                  .title('Error')
                  .textContent(response.data)
                  .ok('Got it!')
          );
      };
      this.login = (user, password) => {
          LoginFactory.login(user, password).then(function success(response){
              console.log(response.data.data);
              $rootScope.isAdmin = true;
              $mdDialog.hide();
          },handleError)
      };
  }
}

export default LoginController;
