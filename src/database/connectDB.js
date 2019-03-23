"use strict";
/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import mongoose from 'mongoose';
import chalk from 'chalk';
import bluebird from 'bluebird';
import config from '../../config';

const connectDB = () => {
  mongoose.Promise = bluebird;

  if (config.nodeEnv !== 'test') {
    // Connect to MongoDB
    mongoose.connect(config.dbUri, { promiseLibrary: bluebird });

    //============================
    // CONNECTION EVENT LISTENERS
    //============================

    // When successfully connected
    mongoose.connection.on('connected', () => {
      if (config.nodeEnv === 'development') {
        console.log(chalk.green('Mongoose connection open to'), chalk.blue(config.dbUri));
      } else {
        console.log(chalk.green('Mongoose connection'), chalk.blue('OPEN'));
      }
    });
    // If the connection throws an error
    mongoose.connection.on('error', err => {
      console.log(chalk.red('Mongoose connection error:', err));
    });
    // When the connection is disconnected
    mongoose.connection.on('disconnected', () => {
      console.log(chalk.yellow('\nMongoose connection disconnected'));
    });
    // If the Node process ends, close the Mongoose connection
    process.on('SIGINT', () => {
      mongoose.connection.close(() => {
        console.log(chalk.yellow('Mongoose connection disconnected through app termination'));
        process.exit(0);
      });
    });
  }
};

export default connectDB;
