// TODO: Include packages needed for this application

// Variables
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require(".utils/generateMarkdown.js");
const fileName = "README.md";
// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		name: "title",
		message: "What is the title of your project?",
	},
{
    type: "input",
    name: "description"
    message: "Please include a description of your project:"
},
{
    type: "list",
    name: "license",
    message: "Please select a license for your project.",
    choices: ['MIT',"ISC","Apache"]
},
{
    type: "input",
    name: "GitHub"
    message: "What is your GitHub username?"
},
{
    type: "input",
    name: "email",
    message: "What is your email address?"
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
