const { achievementSection } = require("./../data/resume");
const chalk = require("chalk");
const boxen = require("boxen");

let achievementtxt = `${chalk
  .hex(`#BB001B`)
  .bold.inverse(`some of my achievements that I'm not proud of 😪😎🔥`)}\n\n`;

const achievementArr = achievementSection.achievementsDescription;
const title = chalk.hex("d4af37").bold.inverse("Achievements");

for (let i = 0; i < achievementArr.length; i++) {
  if (achievementArr[i] != "")
    achievementtxt += ` 🔥 ${` ${achievementArr[i]} `}\n`;
}

module.exports = boxen(achievementtxt, {
  margin: 1,
  padding: 1,
  title,
  titleAlignment: "center",
  textAlignment: "left",
  float: "center",
});
