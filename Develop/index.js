// Include packages required for this application
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input
const questions = [
	{
		type: "input",
		name: "title",
		message: "What is this project's title?",
	},
	{
		type: "input",
		name: "description",
		message: "Please write a description of your project:",
	},
	{
		type: "input",
		name: "installation",
		message: "What steps are required to install this project?",
	},
	{
		type: "list",
		name: "license",
		message: "Which license would you like to include in your project?",
		choices: ["Apache", "ISC", "MIT", "None"],
	},
	{
		type: "input",
		name: "usage",
		message: "How do you use your project?",
	},
	{
		type: "input",
		name: "contributors",
		message:
			"Who contributed to this project? List any names and GitHub usernames separated by a comma:",
	},
	{
		type: "input",
		name: "tests",
		message:
			"List tests run on this application by separating each with a comma:",
	},
	{
		type: "input",
		name: "gitHub",
		message: "What is your GitHub username?",
	},
	{
		type: "input",
		name: "email",
		message: "What is your email address?",
	},
];

// Create a function to write a README file
function writeToFile(fileName, data) {
	return fs.writeFileSync(path.join(__dirname, fileName), data);
}

// Create a function to initialize app
function init() {
	inquirer
		.prompt(questions)
		.then((data) => {
			writeToFile("README.md", generateMarkdown(data));
			console.log(data);
		})
		.catch((err) => {
			console.log(err);
		});
}

// Function call to initialize app
init();
