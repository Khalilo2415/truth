const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const { is } = require("express/lib/request");

//Mongoose Schema for users
const userSchema = new mongoose.Schema(
  {
    Username: {

      type: String,
      required: true,
      minlength: 3,
      maxlength: 55,
      unique: true,
      trim: true,
    },
    email: {

      type: String,
      required: true,
      lowercase: true,
      validate: [isEmail],
      trim: true,

    },
    password: {

      type: String,
      required: true,
      minlength: 6,
      max: 1024,

    },
    
    picture: {

        type:String,
        default:"./uploads/profil/random-user.png",

    },
    bio: {

      type: String,
      max: 1024,

    },
    followers: {

      type: [String],

    },
    following: {

      type: [String],

    },
    likes: {

      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

//fonction to crypt the password,
//play it before save
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function(emailLog, passwordLog) {
  const user = await this.findOne({ emailLog });
  
  if (user) {
    const auth = await bcrypt.compare(passwordLog, user.password);
    if (auth) {
      return user;  
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
};
 


const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
