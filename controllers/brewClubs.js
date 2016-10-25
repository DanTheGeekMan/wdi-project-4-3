module.exports = {
  index:  brewClubsIndex,
  create: brewClubsCreate,
  show:   brewClubsShow,
  update: brewClubsUpdate,
  delete: brewClubsDelete
};

const BrewClub = require('../models/brewClub');

function brewClubsIndex(req, res) {
  let query = {};
  if (req.query.user) query.owner = req.query.user;
  if (req.query.available) query.available = req.query.available;
  BrewClub.find(query)
  .populate("owner")
  .exec((err, brewClubs) => {
    if (err) return res.status(500).json({ message: "Something went wrong." });
    return res.status(200).json({ brewClubs });
  });
}

function brewClubsCreate(req, res) {
  const brewClub = new BrewClub(req.body.brewClub);
  brewClub.owner = req.user._id;
  brewClub.save((err, brewClub) => {
    if (err) return res.status(500).json({ err });
    return res.status(201).json({ brewClub });
  });}

function brewClubsShow(req, res) {
  BrewClub.findById(req.params.id, (err, brewClub) => {
      if (err) return res.status(500).json({ message: "Something went wrong" });
      if (!brewClub) return res.status(404).json({ message: "ClothesItem not found." });
      return res.status(200).json({ brewClub });
    });
}

function brewClubsUpdate(req, res) {
  BrewClub.findByIdAndUpdate(req.params.id, req.body.brewClub, (err, brewClub) => {
      if (err) return res.status(500).json({ message: "Something went wrong." });
      if (!brewClub) return res.status(404).json({ message: "ClothesItem not found." });
      return res.status(200).json({ brewClub });
    });
}

function brewClubsDelete(req, res) {
  BrewClub.findByIdAndRemove(req.params.id, (err, brewClub) => {
    if (err) return res.status(500).json({ message: "Something went wrong." });
    if (!brewClub) return res.status(404).json({ message: "ClothesItem not found." });
    return res.status(204).send();
  });
}
