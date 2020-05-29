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

const askToSearch = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { userResponse } = await inquirer.prompt({
        type: "list",
        message: "Would you like to make another search?",
        choices: ["Yes", "No"],
        name: "userResponse",
      });
      userResponse === "Yes" ? resolve(true) : resolve(false);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { findBySubject, askToSearch };
