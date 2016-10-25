module.exports = {
  index:  brewClubsIndex,
  create: brewClubsCreate,
  show:   brewClubsShow,
  update: brewClubsUpdate,
  delete: brewClubsDelete
};

const BrewClub = require('../models/brewClub');

function brewClubsIndex() {

}

function brewClubsCreate(req, res) {
  const brewClub = new BrewClub(req.body.brewClub);
  brewClub.owner = req.user._id;
  brewClub.save((err, brewClub) => {
    if (err) return res.status(500).json({ err });
    return res.status(201).json({ brewClub });
  });}

function brewClubsShow() {

}

function brewClubsUpdate() {

}

function brewClubsDelete() {

}
