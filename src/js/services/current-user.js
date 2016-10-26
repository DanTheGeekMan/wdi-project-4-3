angular
  .module("brewClub")
  .service("CurrentUserService", CurrentUserService);

  CurrentUserService.$inject = ["TokenService", "$rootScope", "User"];
  function CurrentUserService(TokenService, $rootScope, User){
    let currentUser = TokenService.decodeToken();
    if (currentUser) User.get(currentUser);

    return {
      user: currentUser,
      saveUser(user) {
        user.id     = user.id ? user.id : user._id;
        currentUser = user;
        $rootScope.$broadcast("loggedIn");
      },
      getUser(user){
        return currentUser;
      },
      clearUser(){
        currentUser = null;
        TokenService.clearToken();
        $rootScope.$broadcast("loggedOut");
      }
    };
  }
