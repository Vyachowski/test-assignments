#!/usr/bin/env node
import { program } from 'commander';
import isWordpress from '../src/index.js';

program
  .name('checkWordpress')
  .description('Get a link from the user and return whether the site was built with WordPress.')
  .version('1.0.0')
  .argument('<link>', 'link to the checking domain')
  .action((link) => {
    const resultMessage = isWordpress(link)
    ? `${link} was made with WordpPess`
    : `${link} was NOT made with WordpPess`

    console.log(resultMessage);
  })
  .parse(process.argv);
