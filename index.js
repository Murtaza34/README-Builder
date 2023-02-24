const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter your project title.",
    validate: function (input) {
      if (input === "") {
        return "Project title cannot be empty.";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please describe the purpose and functionality of this project.",
    validate: function (input) {
      if (input === "") {
        return "Project description cannot be empty.";
      } else {
        return true;
      }
    },
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  console.log(
    "\n",
    "-------------------- Hi, Welcome to README Generator --------------------",
    "\n",
    "- Answer the questions below to generate your Professional README.md File",
    "\n"
  );
  inquirer.prompt(questions).then((answers) => {
    console.log("Your all Set!");
  });
}

// function call to initialize program
init();
