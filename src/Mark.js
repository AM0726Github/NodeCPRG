// Generate the README.md
function CreateReadme(answers) {
    return `
<h1 align="center">${answers.Title} 👋</h1>
  
![badge](https://img.shields.io/badge/license-${answers.Description}-brightgreen)<br />
## Description
🔍 ${answers.Description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
💾 ${answers.Installation}
## Usage
💻 ${answers.Usage}
## License
![badge](https://img.shields.io/badge/license-${answers.License}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 
## Contributing
👪 ${answers.Contributing}
## Tests
✏️ ${answers.Tests}

:octocat: Find me on GitHub: [${answers.UserName}](https://github.com/${answers.UserName})<br />
<br />
_This README was generated with ❤️ by [README-generator](https://github.com/AM0726Github/NodeCPRG)`;
  };
  
  module.exports = CreateReadme;