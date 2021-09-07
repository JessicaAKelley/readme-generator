// TO DO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TO DO: Create an array of questions for user input
const questions = [
  // Question 1: Developer Name
  {
    name: "name",
    type: "input",
    message: "What is your name? (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your name.");
        return false;
      }
    },
  },
  // Question 2: Developer GitHub Username
  {
    name: "github",
    type: "input",
    message: "What is your GitHub username? (Required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username.");
        return false;
      }
    },
  },
  // Question 3: Developer Email Address
  {
    name: "email",
    type: "input",
    message: "What is your email address? (Required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email address.");
        return false;
      }
    },
  },
  // Question 4: Project Title
  {
    name: "title",
    type: "input",
    message: "What is your project title? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter your project title.");
        return false;
      }
    },
  },
  // Question 2: Description of Project
  {
    name: "description",
    type: "input",
    message: "Please describe your project. (Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter your project description.");
        return false;
      }
    },
  },
  // Question 3: Table of Contents

  // Question 4: Installation
  {
    name: "installation",
    type: "input",
    message:
      "Please describe the set-up/installation process for your project.",
  },
  // Question 5: Usage
  {
    name: "usage",
    type: "input",
    message: "Please provide instructions and examples for use.",
  },
  // Question 6: Contributing
  {
    name: "contributing",
    type: "input",
    message: "Please provide any and all project contributors.",
  },
  // Question 7: License
  {
    name: "license",
    type: "list",
    message: "Please choose from the below license options.",
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
  // Question 8: Tests
  {
    name: "tests",
    type: "input",
    message: "Please describe how to run any tests.",
  },
];

// TO DO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) throw error;
    console.log("The README file has been successfully generated!");
  });
}

// TO DO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    writeToFile("generated-README", generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();
