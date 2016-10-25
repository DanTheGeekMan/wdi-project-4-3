const mongoose = require('mongoose');

const brewClubSchema = new mongoose.Schema({
  name:  { type: String, trim: true, required: true },
  image: { type: String, trim: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, {
  timestamps: true
});

module.exports = mongoose.model("BrewClub", brewClubSchema);
