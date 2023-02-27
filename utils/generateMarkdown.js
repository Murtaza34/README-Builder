
// --- Function to render Technologies and tools --- //
function renderTechAndTools(builtWith) {
  if (builtWith === "HTML") {
    return "![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)";
  } else if (builtWith === "CSS") {
    return "![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)";
  } else if (builtWith === "JavaScript") {
    return "![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)";
  } else if (builtWith === "Python") {
    return "![Python](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue)";
  } else if (builtWith === "Java") {
    return "![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white)";
  } else if (builtWith === "Ruby") {
    return "![Ruby](https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white)";
  } else if (builtWith === "C++") {
    return "![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white)";
  } else if (builtWith === "C#") {
    return "![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white)";
  } else if (builtWith === "PHP") {
    return "![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white)";
  } else if (builtWith === "Swift") {
    return "![Swift](https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white)";
  } else if (builtWith === "Node.js") {
    return "![Nodejs](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)";
  } else if (builtWith === "React") {
    return "![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)";
  } else if (builtWith === "Angular") {
    return "![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)";
  } else if (builtWith === "Vue.js") {
    return "![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)";
  } else if (builtWith === "Bootstrap") {
    return "![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)";
  } else if (builtWith === "Tailwind CSS") {
    return "![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)";
  } else if (builtWith === "jQuery") {
    return "![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)";
  } else if (builtWith === "Express.js") {
    return "![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)";
  } else if (builtWith === "MongoDB") {
    return "![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)";
  } else if (builtWith === "MySQL") {
    return "![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)";
  }
}

// ----- function to render License Badges ---- //
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GNU GPL v3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "BSD 3-Clause") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "BSD 2-Clause") {
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  } else if (license === "The Unlicense") {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  } else if (license === "None") {
    return "";
  }
}

// ----- function to render License links ---- //
function renderLicenseLinks(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GNU GPL v3") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "BSD 3-Clause") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  } else if (license === "BSD 2-Clause") {
    return "https://opensource.org/licenses/BSD-2-Clause";
  } else if (license === "The Unlicense") {
    return "http://unlicense.org/";
  } else if (license === "None") {
    return "";
  }
}

// function renderLicenseSection(license) {
//   if (license === "None") {
//     return "";
//   } else if (license) {
//     return `License: ${license}`
//   }
// }

// function to generate markdown for README
function generateMarkdown(answers) {
   console.log("Answers:", answers);
      

  return `
  # ${answers.title}

  ### Description
  ${answers.description}
  
  ### Installation
  ${answers.installation}
  
  ### Usage
  ${answers.usage}
  
  ### License 
  ${renderLicenseBadge(answers.license)}
  This project is licensed under the terms of the [${answers.license}](${renderLicenseLinks(answers.license)}).

  ### Contributors
  ${answers.contributors}

  If you're interested in contributing, Simply fork the repo, make your changes, and submit a pull request. Remember to follow my coding standards and guidelines, and test your changes before submitting. Contact me if you need help. By contributing, you agree to follow my code of conduct and licensing terms in the LICENSE.md file.

  Thanks for considering contributing to my project, and let's make it even better together!



`;
}

module.exports = generateMarkdown;
