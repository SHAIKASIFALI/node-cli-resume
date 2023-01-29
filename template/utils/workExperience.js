const { workExperienceSection } = require("./../data/resume");

const chalk = require("chalk");
const split = require("split-string");
const boxen = require("boxen");

const workCompany = `${workExperienceSection.companyName}`;
const workPosition = `${workExperienceSection.position}`;
const timePeriod = `${workExperienceSection.workTimePeriod}`;
// let techStack = "{{workTechStack}}";
// techStack += " ";
const techArr = workExperienceSection.workTechStack;
// const workDescription = `{{workDescription}}`;
const workArr = workExperienceSection.workDescription;
const title = chalk.hex("d4af37").bold.inverse("Recent WorkExperiene");

let techString = ``;
let work = ``;
for (let i = 0; i < techArr.length; i++) {
  techString += ` ${chalk.hex("fca311").inverse(` ${techArr[i]} `)} `;
}

for (let i = 0; i < workArr.length; i++) {
  if (workArr[i] != "") work += ` 👉 ${workArr[i]}\n`;
}

const workSection = `
${chalk.hex("#EA4335").bold.inverse(workCompany)} | ${chalk.bold.italic(
  workPosition
)}
${chalk.dim(timePeriod)}
${`${chalk.bold(`WorkedOn`)} : ${techString}`}
${work}
`;

module.exports = boxen(workSection, {
  margin: 1,
  padding: 1,
  title,
  titleAlignment: "center",
  textAlignment: "left",
  float: "center",
});
