angular
.module("brewClub")
.controller("MembershipsShowCtrl", MembershipsShowCtrl);

MembershipsShowCtrl.$inject = ["Membership", "$stateParams", "$state", "CurrentUserService"];
function MembershipsShowCtrl(Membership, $stateParams, $state, CurrentUserService) {
  const vm = this;

  getMembership();

  vm.join = function(){
    Membership
      .join($stateParams)
      .$promise
      .then(data => {
        getMembership();
      });
  };

  function getMembership(){
    Membership
      .get($stateParams)
      .$promise
      .then(data => {
        vm.brewClub = data.brewClub;
      }, (err) => {
        $state.go("home");
      });
  }

}
