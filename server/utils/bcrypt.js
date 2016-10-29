'use strict';
/**
 * Created by FrankTsai on 2016/9/3.
 */

var bcrypt = require('bcrypt');

exports.cryptPassword = function(password, callback) {
  bcrypt.genSalt(10, function(err, salt) {
    if (err)
      return err;

    bcrypt.hash(password, salt, function(err, hash) {
      callback(hash);
    });

  });
};

exports.comparePassword = function(password, userPassword, callback) {
  bcrypt.compare(password, userPassword, function(err, isPasswordMatch) {
    if (err)
      return callback(err);
    return callback(isPasswordMatch);
  });
};