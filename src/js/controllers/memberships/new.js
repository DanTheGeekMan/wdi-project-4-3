angular
.module("brewClub")
.controller("MembershipsNewCtrl", MembershipsNewCtrl);

MembershipsNewCtrl.$inject = ["Membership", "$state"];
function MembershipsNewCtrl(Membership, $state) {
  const vm = this;

  vm.submit = function(){
    Membership
      .save({ brewClub: vm.brewClub })
      .$promise
      .then(data => {
        $state.go("membershipsIndex");
      });
  };
}
