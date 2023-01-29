const { educationSection } = require("./../data/resume");

const boxen = require("boxen");
const chalk = require("chalk");

const collegeName = `${educationSection.collegeName} `;
const courseName = `${educationSection.courseName}`;
const SGPA = `SGPA : ${educationSection.sgpa}`;
const courseYear = `${educationSection.courseYear}`;

const title = chalk.hex("d4af37").bold.inverse("Education");

const educationSectiontxt = boxen(
  `
${chalk.hex("#FBBC05").bold.inverse(collegeName)}\n
${chalk.hex("BB001B").bold.inverse.dim(courseName)}
${chalk.bold.dim(SGPA)}
${courseYear}
`,
  {
    padding: 1,
    title,
    titleAlignment: `center`,
    textAlignment: `left`,
    float: `center`,
  }
);

module.exports = educationSectiontxt;
