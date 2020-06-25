const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  username: String,
  firstName: String,
  lastName: String,
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
