// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	let url = ``;
	switch (license) {
		case "MIT":
			url = `![licenseShield](https://img.shields.io/badge/license-MIT-yellow)`;
			break;
		case "GPL":
			url = `![licenseShield](https://img.shields.io/badge/license-GPL-blue)`;
			break;
		case "Apache 2.0":
			url = `![licenseShield](https://img.shields.io/badge/license-apache%202.0-blue)`;
			break;
	}
	return url;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	let url = ``;
	if (license === "None") {
		return url;
	}
	url = "/LICENSE";
	return url;
}

// Create a function that returns the license section of README and Table of Contents
// If there is no license, return an empty string
function renderLicenseSection(license) {
	if (license === "None") {
		return ``;
	}
	return `## License
    This project is registered under the [${license} License](${renderLicenseLink(
		license
	)})`;
}

function renderLicenseTableofContents(license) {
	if (license === "None") {
		return ``;
	}
	return `* [License](#license)`;
}

// Create a list when input items are separated by a comma
function renderList(list) {
	const listArr = [];
	list = list.split(",");
	list.forEach((listItem) => {
		listArr.push(`* ${listItem}`);
	});
	return listArr.join("\n  ");
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
	return `# ${data.title}
    ${renderLicenseBadge(data.license)}
    
    ## Table of Contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    ${renderLicenseTableofContents(data.license)}
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## Description
    ${data.description}
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ${renderLicenseSection(data.license)}
    ## Contributing
    ${renderList(data.contributors)}
    
    ## Tests
    ${renderList(data.tests)}
    ## Questions
    * __GitHub:__ [github.com/${data.gitHub}](https://github.com/${data.gitHub})
    * __Email:__ [${data.email}](mailto:${data.email})
     
    
    _This README was created using the [README Generator](https://github.com/azs6189/README-Generator)_
  `;
}

module.exports = generateMarkdown;
