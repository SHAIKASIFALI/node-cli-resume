const { achievementSection } = require("../template/data/resume");
const { inputFunc, confirmFunc } = require("./ask");

module.exports = async () => {
  const firstName = await inputFunc({
    name: `firstName`,
    message: `FirstName to be displayed on Resume? `,
    hint: `( pls dont add spaces like john doe instead type johndoe etc.. not surnames)`,
  });

  const lastName = await inputFunc({
    name: `lastName`,
    message: `LastName to be displayed on Resume? `,
    hint: `(include surnames like shaik  etc..)`,
  });

  const introduction = await inputFunc({
    name: `introduction`,
    message: `Short and Engaging Bio about Yourself.. `,
    hint: `(you can include emojis 😉 too..)`,
  });

  const collegeName = await inputFunc({
    name: `collegeName`,
    message: `please enter the CollegeName (recently studied/currently studying college) `,
    hint: `(Ex: Sri Venkateswara University College Of Engineering pls dont include short forms)`,
  });

  const courseName = await inputFunc({
    name: `courseName`,
    message: `please enter the CourseName (recently pursued/currently pursuing course) `,
    hint: `(Ex: Batchelor's in ComputerScience and Engineering pls dont include short forms)`,
  });

  const sgpa = await inputFunc({
    name: `SCGPA`,
    message: `please enter the Semester Cummulative GPA till now`,
    hint: `(Ex: 9.91 etc enter till 2 decimal places)`,
  });

  const courseYear = await inputFunc({
    name: `courseYear`,
    message: `please enter the course-year `,
    hint: `(Ex: if ur passed out then like startingYear-passedOutYear(ex:2018-2022) or startingYear-expectedPassingOutYear(expec)(ex:2020-2024(expec)))`,
  });

  const skills = await inputFunc({
    name: `skills`,
    message: `please enter the skills you are Familiar With `,
    hint: `(please add a space after each skill Ex: "HTML CSS JAVA" etc)`,
  });

  const isWorkExperienced = await confirmFunc({
    name: `isWorkExperienced`,
    message: `Do you have any Work Experience prior..`,
    hint: `(please press 'y' for 'YES' or 'N' for 'NO')`,
  });
  let companyName = "";
  let position = "";
  let workTimePeriod = "";
  let workTechStack = "";
  let workDescription = "";
  if (isWorkExperienced) {
    companyName = await inputFunc({
      name: `Name`,
      message: `please enter the recent Organisation where u have worked/interned at `,
      hint: `(Ex: Pladex capitalize the firstletter it looks good)`,
    });

    position = await inputFunc({
      name: `position`,
      message: `please enter the your position in the recent Organisation where u have worked/interned at`,
      hint: `(Ex: webDeveloper Intern etc )`,
    });

    workTimePeriod = await inputFunc({
      name: `workTimePeriod`,
      message: `please enter time period u have worked in that Organisation`,
      hint: `(Ex: Sep,2020 - Nov,2021 etc etc )`,
    });

    workTechStack = await inputFunc({
      name: `workTechStack`,
      message: `please enter the tech stack upon which u have worked in that Organisation`,
      hint: `(please add a space after each skill u worked upon Ex: "HTML CSS JAVA" etc )`,
    });

    workDescription = await inputFunc({
      name: `workDescription`,
      message: `please describe your work at that organisation `,
      hint: `(please add a fullstop(.) after each sentence since each sentence with full stop is treated as an BULLET POINT )`,
    });
  }

  const isProject = await confirmFunc({
    name: `sProject`,
    message: `Do you want to include your project in your resume`,
    hint: `(please press 'y' for 'YES' or 'N' for 'NO')`,
  });
  let projectName = "";
  let projectLink = "";
  let projectBuildPeriod = "";
  let projectTechStack = "";
  let projectDescription = "";
  if (isProject) {
    projectName = await inputFunc({
      name: `projectName`,
      message: `please enter the recent projectName  `,
      hint: `(just like Resume-cli capitalize the firstletter it looks good)`,
    });

    projectLink = await inputFunc({
      name: `projectLink`,
      message: `please enter the projectLink `,
      hint: `(if the project is hosted live provide the live link or provide the github repository link)`,
    });

    projectBuildPeriod = await inputFunc({
      name: `projectBuildPeriod`,
      message: `please enter the time taken to build the project `,
      hint: `(just like Sep,2020 - Nov,2021 etc etc)`,
    });

    projectTechStack = await inputFunc({
      name: `projectTechStack`,
      message: `please enter the tech stack upon which u have built the project`,
      hint: `(please add a space after each skill u worked upon like suppose "HTML CSS JAVA" etc )`,
    });

    projectDescription = await inputFunc({
      name: `projectDescription`,
      message: `please describe your project`,
      hint: `(please add a fullstop(.) after each sentence since each sentence with full stop is treated as an BULLET POINT )`,
    });
  }

  achievementsDescription = await inputFunc({
    name: `achievementsDescription`,
    message: `please mention some of your achievements `,
    hint: `please add a fullstop(.) after each sentence since each sentence with full stop is treated as an BULLET POINT )`,
  });

  phoneNumber = await inputFunc({
    name: `phoneNumber`,
    message: `please add the phoneNumber to be diplayed in resume `,
    hint: `(please enter without the country code just enter only phoneNumber like 934613xxx )`,
  });

  email = await inputFunc({
    name: `email`,
    message: `please add the email to be diplayed in resume `,
    hint: `(please enter the email in correct format just like xxx@gmail.com )`,
  });

  linkedIn = await inputFunc({
    name: `linkedIn`,
    message: `please add the linkedIn profile link to be diplayed in resume `,
    hint: `(you need to add the profile url from Linkedin)`,
  });

  github = await inputFunc({
    name: `github`,
    message: `please add the github profile link to be diplayed in resume `,
    hint: `(please enter the github profile url)`,
  });

  codingProfile = await inputFunc({
    name: `codingProfile`,
    message: `please add the codingProfile link to be diplayed in resume `,
    hint: `(you may add any one coding profile link like leetcode link / geeksforgeeks link / codeforces link etc)`,
  });

  const vars = {
    firstName,
    lastName,
    introduction,
    collegeName,
    courseName,
    sgpa,
    courseYear,
    skills,
    companyName,
    position,
    workTimePeriod,
    workTechStack,
    workDescription,
    projectName,
    projectLink,
    projectBuildPeriod,
    projectTechStack,
    projectDescription,
    phoneNumber,
    email,
    linkedIn,
    github,
    codingProfile,
    achievementsDescription,
    packageName: firstName.toLowerCase(),
  };

  return vars;
};
