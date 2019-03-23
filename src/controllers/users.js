"use strict";
import jwt from 'jwt-simple';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import config from '../../config';

const tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.appSecret);
};

const usersController = {

  create: (req, res) => {
    const user = req.body;

    // See if User already exists
    User.findOne({ 'username': user.username })
    // Find or Create
      .then(foundUser => {
        // If one does exist
        if (foundUser) {
          res.status(409).send('User already exists');
        }
        // Else
        else {
          // Encrypt password
          bcrypt.hash(user.password, 10)
            .then(function(hash) {
              // Save new User with hashed password
              const newUser = new User({
                username: user.username,
                password: hash
              });
              newUser.save(err => {
                if (err) {
                  res.status(500).send(err);
                } else {
                  res.status(200).send(newUser);
                }
              });
            });
        }
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },

  read: (req, res) => {
    // Find all users and remove unwanted fields from response
    User.find({}, '-_id -__v -password')
      .then(users => {
        res.status(200).send(users);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },

  login: (req, res) => {
    // Return a token with timestamp info
    res.status(200).send({ token: tokenForUser(req.user) });
  }

};

export default usersController;
