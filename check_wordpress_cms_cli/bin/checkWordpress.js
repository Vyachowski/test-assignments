#!/usr/bin/env node

import { program } from 'commander';
import hasWordpress from '../src/index.js';

const getResultMessage = async (link) => {
  try {
    const resultMessage = await hasWordpress(link)
      ? `'${link}' was made with WordPress`
      : `'${link}' was NOT made with WordPress`

      console.log(await resultMessage);
  } catch(e) {
    console.log(`Please, enter a valid website like google.com or https://google.com`)
  }
}

program
  .name('checkWordpress')
  .description('Get a link from the user and return whether the site was built with WordPress.')
  .version('1.0.0')
  .argument('<link>', 'link to the checking domain')
  .action(getResultMessage)
  .parse(process.argv);
