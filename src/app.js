"use strict";
/* eslint-disable no-console */
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import session from 'express-session';
import helmet from 'helmet';
import passport from 'passport';
import routes from './routes/routes';
import connectDB from './database/connectDB';
import config from '../config';

// TODO: add tests

// MongoDB Setup
connectDB();

// Initialize Express app
const app = express();

// Middleware for setting headers
app.use(helmet());

// Middleware for logging
app.use(morgan('combined'));

// Middleware parses incoming request payloads into JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: '*/*' }));

// Express session middleware
app.use(session({
  secret: config.appSecret,
  resave: false,
  saveUninitialized: true
}));

// Passport for Auth
app.use(passport.initialize());
app.use(passport.session());

// Pass in our app to make it available to all routes
routes(app);

// Global error logging if any errors make it past our route controllers
// app.use((err, req, res, next) => {
//   res.status(422).send({ error: err.message });
// });

export default app;
