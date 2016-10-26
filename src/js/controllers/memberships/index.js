angular
.module("brewClub")
.controller("MembershipsIndexCtrl", MembershipsIndexCtrl);

MembershipsIndexCtrl.$inject = ["Membership"];
function MembershipsIndexCtrl(Membership) {
  const vm = this;

  Membership
  .query()
  .$promise
  .then(data => {
    vm.memberships = data.brewClubs;
  });
}
