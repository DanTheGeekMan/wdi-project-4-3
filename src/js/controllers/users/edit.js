angular
.module("brewClub")
.controller("UsersEditCtrl", UsersEditCtrl);

UsersEditCtrl.$inject = ["User", "$stateParams"];
function UsersEditCtrl(User, $stateParams) {
  const vm = this;

  User.get($stateParams).$promise
    .then(data => {
      vm.user = data.user;
    });

  // Update
}
