// TO DO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./Develop/utils/generateMarkdown");

// TO DO: Create an array of questions for user input
const questions = [
  // Question 1: Developer Name
  {
    name: "name",
    type: "input",
    message: "What is your name?",
  },
  // Question 2: Developer GitHub Username
  {
    name: "github",
    type: "input",
    message: "What is your GitHub username?",
  },
  // Question 3: Developer Email Address
  {
    name: "email",
    type: "input",
    message: "What is your email address?",
  },
  // Question 4: Project Title
  {
    name: "title",
    type: "input",
    message: "What is your project title?",
  },
  // Question 2: Description of Project
  {
    name: "description",
    type: "input",
    message: "Please describe your project.",
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) throw error;
    console.log("The README file has been successfully generated!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    writeToFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();
