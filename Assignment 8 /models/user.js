const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "fullName is required"],
    unique: [true, "fullName already exists in the database"],
    validate: [
      (name) => validator.isAlpha(name, "en-US", { ignore: " " }),
      "Usernames must be alphanumeric",
    ],
  },
  email: {
    type: String,
    require: [true, "email address is required."],
    unique: [true, "That email address is already taken."],
    lowercase: true,
    validate: [validator.isEmail, "a valid email is required."],
  },
  password: {
    type: String,
    required: [true, "password is required."],
    validate: [
      (pass) => {
        let min = pass.length >= 8;
        let upper = /[A-Z]/.test(pass);
        let lower = /[a-z]/.test(pass);
        let special = /[#?!@$%^&*-]/.test(pass);
        let number = /[0-9]/.test(pass);

        return min && lower && upper && special && number;
      },
      "Password must have minimum eight characters, at least one uppercase letter, one lowercase letter and one number",
    ],
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 12);
  next();
});

module.exports = mongoose.model("Users", UserSchema);
