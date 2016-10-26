const router           = require("express").Router();
const authentications  = require("../controllers/authentications");
const users            = require("../controllers/users");
const brewClubs        = require("../controllers/brewClubs");

router.route("/register")
.post(authentications.register);
router.route("/login")
.post(authentications.login);

router.route('/users/:id')
.get(users.show)
.put(users.update);

router.route("/memberships")
.get(brewClubs.index)
.post(brewClubs.create);
router.route('/memberships/:id')
.get(brewClubs.show)
.put(brewClubs.update)
.delete(brewClubs.delete);

module.exports = router;
