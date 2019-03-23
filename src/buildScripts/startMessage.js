/* eslint-disable no-console */
import chalk from 'chalk';
import config from '../../config';

console.log(chalk.blueBright('arch:'), process.arch, chalk.blueBright('node:'), process.version);

console.log(chalk.green('Starting app in'),
  chalk.blue(config.nodeEnv),
  chalk.green('mode...'));
