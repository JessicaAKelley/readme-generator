// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return"";
  } else {
    return `![github license]`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n For license link, please check`
  }
  return"";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "None") {
    return `

## License
`;
return "";

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)

## Installation
  ${data.installation}

## Usage
  ${data.usage}

## License
  Copyright (c) $(new Date().getFullYear()} by ${data.name}

## Contribution
  ${data.contribution}

## Tests
  ${data.tests}

## Questions
  To check out other repositories by this user, click here: [https://github.com/${data/github}](https://github.com/${data.github})

  For any questions, comments, or suggestions, I can also be contacted at ${data.email}





`;
}

module.exports = generateMarkdown;
