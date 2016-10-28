angular
.module("brewClub")
.controller("MembershipsIndexCtrl", MembershipsIndexCtrl);

MembershipsIndexCtrl.$inject = ["Membership", "CurrentUserService", "$state"];
function MembershipsIndexCtrl(Membership, CurrentUserService, $state) {
  const vm = this;

  if (!CurrentUserService.getUser()) return $state.go("home");

  Membership
  .query()
  .$promise
  .then(data => {
    vm.memberships = data.brewClubs;
  });
}
