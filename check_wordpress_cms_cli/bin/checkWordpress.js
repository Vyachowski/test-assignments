#!/usr/bin/env node

import { program } from 'commander';
import hasWordpress from '../src/index.js';

program
  .name('checkWordpress')
  .description('Get a link from the user and return whether the site was built with WordPress.')
  .version('1.0.0')
  .argument('<link>', 'link to the checking domain')
  .action(async (link) => {
    const resultMessage = await hasWordpress(link)
    ? `'${link}' was made with WordPress`
    : `'${link}' was NOT made with WordPress`

    console.log(await resultMessage);
  })
  .parse(process.argv);
