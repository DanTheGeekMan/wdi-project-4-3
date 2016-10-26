angular
  .module("brewClub")
  .factory("Membership", membershipFactory);

membershipFactory.$inject =["API", "$resource"];
function membershipFactory(API, $resource){
  return $resource(`${API}/memberships/:id`, { id: "@_id"}, {
    'query': { method: "GET", isArray: false }
  });
}
