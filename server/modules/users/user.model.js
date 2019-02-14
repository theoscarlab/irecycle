const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
const randomstring = require("randomstring");

const validator = require('validator')
const userValidation = require('./user.validations');
const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required!'],
    trim: true,
    validate: {
      validator(email) {
        return validator.isEmail(email);
      },
      message: '{VALUE} is not a valid email!',
    },
  },
  firstName: {
    type: String,
    required: [true, 'FirstName is required!'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'LastName is required!'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
    trim: true,
    minlength: [6, 'Password need to be longer!'],
    /* validate: {
      validator(password) {
        return userValidation.passwordReg.test(password);
      },
      message: '{VALUE} is not a valid password!',
    }, */
  },
  verificationCode: {
    type: String,
    default: randomstring.generate(32)
  },
  emailCode: {
    type: String,
    default: randomstring.generate(32)
  },
  salt: String,
  active: {
    type: Boolean,
    default: false
  },
  emailConfirmation: {
    type: Boolean,
    default: false
  },
  userType: {
    type: Array,
    required: true,
    default: []
  },
  points:{
    type: Number,
    default:0
  },
  address: Object,
  rankPoint:{
    type: Number,
    default:0
  },
  order: Object,
});

UserSchema.pre('save', function (next) {
  if (!this.active && this.password) {//if (this.isModified('password')) {//
    this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
    this.password = this.hashPassword(this.password);
    this.active = true
  }
  return next();
});

UserSchema.pre('update', function (next) {
  if (!this.active && this.password) {//if (this.isModified('password')) {//
    this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
    this.password = this.hashPassword(this.password);
    this.active = true
  }
  return next();
});

UserSchema.methods.hashPassword = function (password) {
  return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha1').toString('base64')
};

UserSchema.methods.authenticate = function (password) {
  return this.password === this.hashPassword(password)
}

module.exports = mongoose.model('User', UserSchema);