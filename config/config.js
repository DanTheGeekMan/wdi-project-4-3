module.exports = {
  db: {
    test : "mongodb://localhost/brew-club-test",
    development : "mongodb://localhost/brew-club-development",
    production : "mongodb://localhost/brew-club"
  },
  secret: process.env.SECRET || "gosh this is so secret... shhh..."
};
