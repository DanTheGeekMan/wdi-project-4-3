angular
.module("brewClub")
.controller("UsersBrewCtrl", UsersBrewCtrl);

UsersBrewCtrl.$inject = ["User"];
function UsersBrewCtrl(User) {
  const vm = this;

  User.get($stateParams).$promise
    .then(data => {
      vm.user = data.user;
    });

  // Update Brew
}
