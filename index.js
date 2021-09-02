// TO DO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./Develop/utils/generateMarkdown.js");

// TO DO: Create an array of questions for user input
const questions = [
  // Question 1: Developer Name
  "What is your name? (Required)",

  // Question 2: Developer GitHub Username
  "What is your GitHub Username? (Required)",

  // Question 3: Developer Email
  "What is your email? (Required)",

  // Question 4: Project Title
  "What is your project title? (Required)",

  // Question 5: Project Description
  "Please provide a description of your project. (Required)",

  // Question 6: Installation
  "Please describe the set-up/installation process for your project.",

  // Question 7: Usage
  "Please provide instructions and examples for project use.",

  // Question 8: Contribution
  "Please provide any and all project contributors.",

  // Question 9: Tests
  "Please describe how to run any tests.",

  // Question 10: License
  "Which license is the application covered under?",
];

// TO DO: Create a function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      // If an error occurs, reject Promise and send error to Promise's `.catch()` method
      if (err) {
        reject(err);
        // Return out of function
        return;
      }

      // If successful, resolve Promise and send successful data to `.then()` method
      resolve({
        ok: true,
        message: "README has been successfully generated!",
      });
    });
  });
}

// TO DO: Create a function to initialize app
function init() {
  const [
    nameQ,
    githubQ,
    emailQ,
    titleQ,
    descriptionQ,
    installationQ,
    usageQ,
    contributionQ,
    testQ,
    licenseQ,
  ] = questions;
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: nameQ,
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: githubQ,
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: emailQ,
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter your email address.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "title",
      message: titleQ,
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your project title.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: descriptionQ,
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please provide a description of your project.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: installationQ,
    },
    {
      type: "input",
      name: "usage",
      message: usageQ,
    },
    {
      type: "input",
      name: "contribution",
      message: contributionQ,
    },
    {
      type: "input",
      name: "test",
      message: testQ,
    },
    {
      type: "list",
      name: "license",
      message: licenseQ,
      choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
        "Boost Software License 1.0",
        "The Unlicense",
      ],
    },
  ]);
  // .then((answers) => {
  //   writeToFile("README.md", generateMarkdown(answers));
  // })
  // .catch((error) => {
  //   if (error.isTtyError) {
  //     console.log("Prompt couldn't be rendered in the current environment");
  //   } else {
  //     console.log("Something else went wrong");
  //   }
  // });
}

// Function call to initialize app
init();
