const { titleSection } = require("./../data/resume");
const { socialSection } = require("./../data/resume");

const chalk = require("chalk");
const centerText = require("center-text");
const firstName = chalk.green.bold.inverse(` ${titleSection.firstName} `);
const lastName = chalk.white.bold(` ${titleSection.lastName} `);
const name = ` ${firstName}${lastName} `;
const simpleSocial = `${chalk
  .hex("#BB001B")
  .bold.inverse(`${socialSection.email}`)}|${chalk.blue.bold.inverse(
  `+91 ${socialSection.phoneNumber}`
)}`;

const title = `
${centerText(name)}
${centerText(simpleSocial)}
`;
module.exports = title;
