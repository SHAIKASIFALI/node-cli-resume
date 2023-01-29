const ora = require("ora");
const path = require("path");
const execa = require("execa");
const alert = require("cli-alerts");
const copy = require("copy-template-dir");
const chalk = require("chalk");
const { green: g, yellow: y, dim: d } = require("chalk");

const spinner = ora({ text: "" });
const questions = require("./questions");

function Loaded() {
  const spinner = ora("Welcome in Cli World").start();

  setTimeout(() => {
    spinner.indent = 30;
    spinner.spinner = "monkey";
    spinner.text = `${chalk.green("Support Project by giving a Star ⭐ ")}`;
  }, 2000);

  setTimeout(() => {
    spinner.indent = 30;
    spinner.spinner = "monkey";
    spinner.text = `${chalk.magentaBright("Resume is Ready for Printing...")}`;
  }, 4000);
  setTimeout(() => {
    spinner.indent = 30;
    spinner.spinner = "monkey";
    spinner.text = `${chalk.blueBright("Printing Done, Here We go:")}`;
  }, 6000);

  setTimeout(() => {
    spinner.succeed(
      `${chalk.greenBright(
        "Congratulations, Now you have a Identity in CLI World.😄"
      )}`
    );
  }, 8000);
}
module.exports = async () => {
  const vars = await questions();
  const outDir = vars.firstName;
  const inDirPath = path.join(__dirname, `../template`);
  const outDirPath = path.join(process.cwd(), outDir);

  copy(inDirPath, outDirPath, vars, async (err, createdFiles) => {
    if (err) throw err;

    console.log(d(`\nCreating files in ${g(`./${outDir}`)} directory:\n`));

    createdFiles.forEach((filePath) => {
      const fileName = path.basename(filePath);
      console.log(`${g(`CREATED`)} ${fileName}`);
    });

    console.log();
    spinner.start(
      `${y(`DEPENDENCIES`)} installing…\n\n${d(`It may take moment…`)}`
    );
    process.chdir(outDirPath);
    // const pkgs = [
    //   `meow@9.0.0`,
    //   `chalk@4.1.2`,
    //   `cli-alerts@latest`,
    //   `cli-welcome@latest`,
    //   `cli-meow-help@latest`,
    //   `cli-handle-error@latest`,
    //   `cli-handle-unhandled@latest`,
    // ];

    // await execa(`npm`, [`install`, ...pkgs]);
    // await execa(`npm`, [`install`, `prettier`, `-D`]);
    await execa(`npm`, [`install`]);
    await execa(`npm`, [`dedupe`]);
    // await execa(`npm`, [`start`]);
    spinner.succeed(`${g(`DEPENDENCIES`)} installed!`);

    alert({
      type: `success`,
      name: `ALL DONE`,
      msg: `\n\n${createdFiles.length} files created in ${d(
        `./${outDir}`
      )} directory`,
    });
    Loaded();
    alert({
      type: `info`,
      name: `Printing Resume`,
      msg: `\n\n to print you Resume kindly run the following commands in your terminal
            1.cd ${outDir}
            2.npm link
            3.${vars.firstName}-resume (or) node index.js
            `,
    });
  });
};
