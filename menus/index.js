const inquirer = require("inquirer");

const findBySubject = async () => {
  return new Promise(async (resolve, reject) => {
    const { selection } = await inquirer.prompt({
      type: "list",
      choices: [
        "information-technology",
        "gadgets",
        "science",
        "tech-policy",
        "cars",
        "gaming",
      ],
      name: "selection",
    });
    resolve(selection);
  });
};

module.exports = { findBySubject };
