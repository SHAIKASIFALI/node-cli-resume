const { socialSection } = require("./../data/resume");

const chalk = require("chalk");
const boxen = require("boxen");
const dim = chalk.dim;
const githubClr = chalk.hex(`#6cc644`).bold.inverse;
const linkedInClr = chalk.hex(`#0077b5`).bold.inverse;
const gmailClr = chalk.hex(`#BB001B`).bold.inverse;
const codingProfileClr = chalk.hex(`#FBBC05`).bold.inverse;
const title = chalk.hex("d4af37").bold.inverse("Social Links");

const social = `
${chalk.bold.red.inverse(
  "Hey wanna say HI👋👋 ,wanna talk something😁 click Below👇"
)}\n
${linkedInClr(` Linkedin `)} :  ${dim(`${socialSection.linkedIn}`)}\n
${githubClr(` GitHub `)} :  ${dim(`${socialSection.github}`)}\n
${gmailClr(` Gmail `)} :  ${dim(`${socialSection.email}`)}\n
${codingProfileClr(` CodingProfile `)} :  ${dim(
  `${socialSection.codingProfile}`
)}
`;
const socialSectiontxt = boxen(social, {
  padding: 1,
  title,
  margin: 1,
  titleAlignment: `center`,
  textAlignment: `left`,
  float: "center",
  dimBorder: true,
});
module.exports = socialSectiontxt;
