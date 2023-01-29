#!/usr/bin/env node
const { name } = require("./package.json");
const alert = require("cli-alerts");
const exists = require("package-exists");
const clearConsole = require("clear-any-console");
const projectSection = require("./utils/projects");
const workSection = require("./utils/workExperience");
const title = require("./utils/title");
const intro = require("./utils/intro");
const educationSection = require("./utils/education");
const skillSection = require("./utils/skills");
const socialSection = require("./utils/socials");
const achievementSection = require("./utils/achievement");
clearConsole();
console.log(title);
console.log(intro);
console.log(educationSection);
console.log(skillSection);
"{{companyName}}" != "" && console.log(workSection);
"{{projectName}}" != "" && console.log(projectSection);
console.log(achievementSection);
console.log(socialSection);
if (!exists.npmexists(name)) {
  alert({
    type: `success`,
    name: `To get resume using npx ${name} `,
    msg: `\n\n To get the resume using npx command kindly follow the steps below steps👇
          1.publish the package to npm registry  
            for ref('https://www.geeksforgeeks.org/steps-to-create-and-publish-npm-packages/')
          2.Then after publishing run npx ${name} command from your terminal
          3.Heyaaa...Njoyyyy🎉🙌🙌🥳🥳 you have succesfully created the resume by single npx command which is 
            easily shareable to anyone and anywhere😁😁 `,
  });
}
