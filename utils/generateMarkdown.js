// Function to generate markdown for README.md

function generateMarkdown(data) {
  return `# ${data.title} ${renderBadge(data.license)}

## Table of contents
* [Description](#description)
* [Dependencies](#dependencies)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Contact](#email)

## Description
${data.description}

## Installation
${data.dependencies}

## Usage
${data.usage}

## License
${data.license} 
${renderSection(data.license)}

## Contribution
${data.contribution}

## Tests
${data.test}

## Contact
- <a href='https://github.com/${data.username}' target='_blank'>GitHub: ${data.username}</a>
- For any questions regarding the project you can contact me at ${data.email}
  `
}

// Function to render badge
function renderBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return ''
}

// Function to render section
function renderSection(license) {
  if (license !== "None") {
    return (
      `
      Copyright © ${license}. All rights reserved. 
      
      Licensed under the ${license} license.`

    )
  }
  return ''
}

module.exports = generateMarkdown;