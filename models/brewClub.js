const mongoose = require('mongoose');

const brewClubSchema = new mongoose.Schema({
  name:  { type: String, trim: true, required: true },
  image: { type: String, trim: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
}, {
  timestamps: true
});

brewClubSchema.pre("save", function(next) {
  if (!this.isNew) next();
  this.members.push(this.owner);
  return next();
});

module.exports = mongoose.model("BrewClub", brewClubSchema);
