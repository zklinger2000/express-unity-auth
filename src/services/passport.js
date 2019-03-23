const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
import bcrypt from 'bcryptjs';
import User from '../models/User';
import config from '../../config';

// Setup options for JWT strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.appSecret
};

// JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  console.log(payload);
  // See if the user ID in the payload exists in our database
  User.findById(payload.sub, function(err, user) {
    if (err) return done(err, false);
    // If there is a user found, call done with null for 'no errors' and the returned User from db
    if (user) {
      done(null, user);
    } else { // Else call done with null and false for 'no user found'
      done(null, false);
    }
  });
});

// Simple password strategy
const localLogin = new LocalStrategy(
  function(username, password, done) {
    User.findOne({ 'username': username })
      .then(user => {
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        bcrypt.compare(password, user.password)
          .then(isValid => {
            if (!isValid) {
              return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
          });
      })
      .catch(err => {
        return done(err);
      });
  }
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
