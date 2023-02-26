// ----- function to render License Badges ---- //
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "Apache-2.0") {
    return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  } else if (license === "GPL-3.0") {
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else if (license === "BSD-3-Clause") {
    return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
  } else if (license === "BSD-2-Clause") {
    return "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)";
  } else if (license === "The Unlicense") {
    return "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
  } else if (license === "None") {
    return "";
  }
}

// ----- function to render License links ---- //
function renderLicenseLinks(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Apache-2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GPL-3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "BSD-3-Clause") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  } else if (license === "BSD-2-Clause") {
    return "https://opensource.org/licenses/BSD-2-Clause";
  } else if (license === "The Unlicense") {
    return "http://unlicense.org/";
  } else if (license === "None") {
    return "";
  }
}

function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else if (license) {
    
  }
}

// function to generate markdown for README
function generateMarkdown(answer) {
  return `
  # ${answer.title}

`;
}

module.exports = generateMarkdown;
