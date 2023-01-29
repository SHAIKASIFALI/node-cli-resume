const { skillSection } = require("./../data/resume");

const boxen = require("boxen");
const chalk = require("chalk");
// const split = require("split-string");
// const skillStr = "{{skills}}";
const skillsArr = skillSection.skills;
const title = chalk.hex("d4af37").bold.inverse("Skills");

let skill = `${chalk
  .hex("c81d25")
  .bold.inverse(`Tech Stack🧐 I'm Familiar With😎 `)} \n\n`;

for (let i = 0; i < skillsArr.length; i++) {
  skill += ` 🔥${chalk.hex("f79256").bold.inverse(` ${skillsArr[i]} `)} `;
  if (i != 0 && i % 5 == 0) skill += `\n\n`;
}

module.exports = boxen(skill, {
  title,
  margin: 1,
  titleAlignment: `center`,
  textAlignment: `left`,
  float: "center",
  padding: 1,
});
