const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter your project title:",
    validate: function (input) {
      if (input === "") {
        return "Project title cannot be blank";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please describe the purpose and functionality of your project:",
    validate: function (input) {
      if (input === "") {
        return "Project description cannot be blank";
      } else {
        return true;
      }
    },
  },
  {
    type: "checkbox",
    name: "builtWith",
    message: "Please select the technologies or tools used to build your project:",
    choices: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Java",
      "Ruby",
      "C++",
      "C#",
      "PHP",
      "Swift",
      "Node.js",
      "React",
      "Angular",
      "Vue.js",
      "Bootstrap",
      "Tailwind CSS",
      "jQuery",
      "Express.js",
      "MongoDB",
      "MySQL",
    ],
    validate: function (checkbox) {
      if (checkbox.length === 0) {
        return "Please select at least one technology or tool.";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter the steps needed to install the application:",
    validate: function (input) {
      if (input === "") {
        return "Installation steps would be appreciated";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions on how to use this application:",
    validate: function (input) {
      if (input === "") {
        return "Usage instruction would be appreciated";
      } else {
        return true;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Choose the license for your project:",
    choices: [
      "MIT",
      "Apache 2.0",
      "GNU GPL v3",
      "BSD 3-Clause",
      "BSD 2-Clause",
      "The Unlicense",
      "None",
    ],
  },
  {
    type: "input",
    name: "name",
    message: "Please enter your name, this will appear in the license section",
    validate: function (input) {
      if (input === "") {
        return "Name cannot be blank";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "contributors",
    message: "List any contributors to your project? Please enter their Github usernames:",
    default: "None",
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide information about any tests for your project:",
    default: "None",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your Github username:",
    validate: function (input) {
      if (input === "") {
        return "Github username cannot be blank";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address:",
    validate: function (input) {
      if (input === "") {
        return "Email address cannot be blank";
      } else {
        return true;
      }
    },
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.error(err)
      : console.log(
          "\n",
          "1) To view your generated README.md file, please navigate to the Generated file directory.",
          "\n",
          "\n",
          "------------- Thank you for using this README generator! -------------",
          "\n"
        )
  );
}

// function to initialize program
function init() {
  console.log(
    "\n",
    "-------------------- Hi, Welcome to README Generator --------------------",
    "\n",
    "\n",
    "1) Answer the questions below to generate your Professional README.md File.",
    "\n",
    "2) Please NOTE! Pressing enter will jump to the next question. To add new line use <br>.",
    "\n",
    "3) If you wish to exit, please press Ctrl + C.",
    "\n"
  );
  inquirer.prompt(questions).then((answers) => {
    writeToFile("./Generated-file/README.md", generateMarkdown({ ...answers }));
    console.log(
      "\n",
      "------------- Your README.md has been Successfully Generated! -------------",
      "\n",
      "----- Below are your results:",
      "\n",
      answers
    );
  });
}

// function call to initialize program
init();
