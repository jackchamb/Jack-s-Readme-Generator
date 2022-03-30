// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
<h1 allign="center">${data.projectTitle}

![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />

## Description
  ${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
  ${data.installation}

## Usage
  ${data.usage}

## Contributing
  ${data.contributing}

## License
![Badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
<br />
This application is under the ${data.license} license.

## Tests
  ${data.tests}

## Questions
  ${data.questions}<br />
<br />
:octocat: Find me on Github: [${data.username}](https://github.com/${data.username})<br />
<br />
Email me with any questions: ${data.email}<br /><br />



`;
}

module.exports = generateMarkdown;
