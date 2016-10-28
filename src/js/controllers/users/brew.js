angular
.module("brewClub")
.controller("UsersBrewCtrl", UsersBrewCtrl);

UsersBrewCtrl.$inject = ["User", "$stateParams"];
function UsersBrewCtrl(User, $stateParams) {
  const vm = this;

  User
    .get($stateParams).$promise
    .then(data => {
      vm.user = data.user;
    });

  vm.submit = function(){
    User
      .update($stateParams, { user: vm.user }).$promise
      .then(data => {
        console.log(data);
        vm.user = data.user;
      });
  };
}
