"use strict";
import config from '../../config';
import usersController from '../controllers/users';
import passport from 'passport';
import '../services/passport';

const requireAuth = passport.authenticate('jwt', { session: false });

const routes = (app) => {
  //================
  // Sample Routes
  //================

  // Home page
  app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html><html><head></head><body><h1>${config.nodeEnv}</h1><a href="/api/noauth">Route example</</body></html>`);
  });
  // Returns JSON
  app.get('/api/noauth', (req, res) => {
    res.json({ message: 'no authorization required' });
  });
  // Authentication required
  app.get('/api/me', requireAuth, (req, res) => {
    res.json({ message: `${req.user.username} is authenticated`});
  });

  //=======
  // User
  //=======

  // Create
  app.post('/api/users/create', usersController.create);

  // Read all
  app.get('/api/users', requireAuth, usersController.read);

  // Login
  app.post('/api/users/login', passport.authenticate('local'), usersController.login);

};

export default routes;
