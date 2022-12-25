#!/usr/bin/env node
// console.clear();
import clearConsole from "clear-any-console";
import chalk from "chalk";
import PKGFILE from "./package.json" assert { type: "json" };

const log = console.log;

clearConsole();
function say() {
  return `
  ${PKGFILE.name} ${PKGFILE.description} v${PKGFILE.version}
  Hey this is ${chalk.bgYellowBright(`Ashok Patidar`)} here
  great ${chalk.bgGreen(`green`)} to be here for 
  Node-CLI ${chalk.dim(`Learning`)} ${chalk.underline(`club`)}
  
  🌀 Twitter: https://twitter.com/ashokpatidar
  🔟 Github: https://github.com/ashokpatidar/ashok
  🚀 🏦 

  I work for ${chalk
    .bgHex("#1885bf")
    .underline("priceline.com")} and i love Travel
  `;
}

log(say());
