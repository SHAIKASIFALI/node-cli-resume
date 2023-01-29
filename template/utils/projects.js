const { projectSection } = require("./../data/resume");

const chalk = require("chalk");
// const split = require("split-string");
const boxen = require("boxen");

const projectName = `${projectSection.projectName}`;
const projectLink = `${projectSection.projectLink}`;
const timePeriod = `${projectSection.projectBuildPeriod}`;
// const techStack = "{{projectTechStack}}";
const techArr = projectSection.projectTechStack;
// const projectDescription = `{{projectDescription}}`;
const projectArr = projectSection.projectDescription;
const title = chalk.hex("d4af37").bold.inverse("Recent Project");

let techString = ``;
let project = ``;
for (let i = 0; i < techArr.length; i++) {
  techString += ` ${chalk.hex("fca311").inverse(` ${techArr[i]} `)} `;
}
for (let i = 0; i < projectArr.length; i++) {
  if(projectArr[i] != "")
  project += `👉${` ${projectArr[i]}`}\n`;
}

const projectSectiontxt = `
${chalk.hex("ee6c4d").inverse.bold(projectName)} | ${chalk.bold.italic(
  projectLink
)}
${timePeriod}
${`${chalk.bold(`WorkedOn`)} : ${techString}`}
${project}
`;

module.exports = boxen(projectSectiontxt, {
  margin: 1,
  padding: 1,
  title,
  titleAlignment: "center",
  textAlignment: "left",
  float: "center",
});
