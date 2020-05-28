const colors = require("colors");

const showData = (header, link) => {
  console.log(header.yellow);
  console.log(link.cyan);
  console.log("---------------------------\n");
};

module.exports = { showData };
