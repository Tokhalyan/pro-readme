// Function to generate markdown for README.md

function generateMarkdown(data) {
  return `# ${data.title} ${renderBadge(data.license)}

## Table of contents
* [Description](#description)
* [Installation](#dependencies)
* [Ssage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Contact us](#email)
    
## Description
${data.description}

## Installation
${data.dependencies}

## Usage
${data.usage}

## License
${data.license} ${renderLink(data.license)}

## Contribution
${data.contribution}

## Tests
${data.test}

## Questions
For any questions regarding the project you can contact me at ${data.email}
  `
}

// Function to render badge
function renderBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return ''
}

// Function to render link
function renderLink(license) {
  if (license !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ''
}

// Function to render section
function renderSection(license) {
  if (license !== "None") {
    return (
      `## License 📛
      Copyright © ${license}. All rights reserved. 
      
      Licensed under the ${license} license.`

    )
  }
  return ''
}

module.exports = generateMarkdown;