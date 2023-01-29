const { introSection } = require("./../data/resume");

const chalk = require("chalk");
const centerText = require("center-text");
const intro = `${centerText(chalk.italic(`${introSection}`))}
`;

module.exports = intro;
