angular
.module("brewClub")
.controller("MembershipsShowCtrl", MembershipsShowCtrl);

MembershipsShowCtrl.$inject = ["Membership", "$stateParams", "$state"];
function MembershipsShowCtrl(Membership, $stateParams, $state) {
  const vm = this;

  Membership
    .get($stateParams)
    .$promise
    .then(data => {
      vm.brewClub = data.brewClub;
    }, (err) => {
      $state.go("home");
    });
}
