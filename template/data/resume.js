const { splitSpace, splitPeriod } = require("./resumeUtils");

const skills = splitSpace("{{skills}}");
const workTechStack = splitSpace("{{workTechStack}}");
const workDescription = splitPeriod("{{workDescription}}");
const projectTechStack = splitSpace("{{projectTechStack}}");
const projectDescription = splitPeriod("{{projectDescription}}");

const achievementsDescription = splitPeriod("{{achievementsDescription}}");
module.exports = {
  titleSection: {
    firstName: "{{firstName}}",
    lastName: "{{lastName}}",
  },
  introSection: "{{introduction}}",
  educationSection: {
    collegeName: "{{collegeName}}",
    courseName: "{{courseName}}",
    sgpa: "{{sgpa}}",
    courseYear: "{{courseYear}}",
  },
  skillSection: {
    skills: skills,
  },
  workExperienceSection: {
    isWorkExperienced: "{{isWorkExperienced}}" == "true" ? true : false,
    companyName: "{{companyName}}",
    position: "{{position}}",
    workTimePeriod: "{{workTimePeriod}}",
    workTechStack: workTechStack,
    workDescription: workDescription,
  },
  projectSection: {
    isProject: "{{isProject}}" == "true" ? true : false,
    projectName: "{{projectName}}",
    projectLink: "{{projectLink}}",
    projectBuildPeriod: "{{projectBuildPeriod}}",
    projectTechStack: projectTechStack,
    projectDescription: projectDescription,
  },
  achievementSection: {
    achievementsDescription: achievementsDescription,
  },
  socialSection: {
    phoneNumber: "{{phoneNumber}}",
    email: "{{email}}",
    linkedIn: "{{linkedIn}}",
    github: "{{github}}",
    codingProfile: "{{codingProfile}}",
  },
};
