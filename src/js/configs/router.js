angular
  .module("brewClub")
  .config(Router);

Router.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
function Router($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state("home", {
    url: "/",
    templateUrl: "/js/views/home.html",
    controller: "HomeCtrl as home"
  })
  .state("membershipsIndex", {
    url: "/memberships",
    templateUrl: "/js/views/memberships/index.html",
    controller: "MembershipsIndexCtrl as index"
  })
  .state("membershipsNew", {
    url: "/memberships/new",
    templateUrl: "/js/views/memberships/new.html",
    controller: "MembershipsNewCtrl as new"
  })
  .state("membershipsShow", {
    url: "/memberships/:id",
    templateUrl: "/js/views/memberships/show.html",
    controller: "MembershipsShowCtrl as show"
  })
  .state("usersBrew", {
    url: "/users/:id/edit/brew",
    templateUrl: "/js/views/users/brew.html",
    controller: "UsersBrewCtrl as brew"
  })
  .state("usersEdit", {
    url: "/users/:id/edit",
    templateUrl: "/js/views/users/edit.html",
    controller: "UsersEditCtrl as edit"
  });

  $urlRouterProvider.otherwise("/");

}
