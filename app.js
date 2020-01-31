const cheerio = require("cheerio");
const axios = require("axios");
const colors = require("colors");

axios.get("https://arstechnica.com/gadgets/").then(response => {
  const $ = cheerio.load(response.data);

  $("li.article").each((i, element) => {
    const link = $(element)
      .find("a.overlay")
      .attr("href");

    const header = $(element)
      .find("a")
      .text()
      .split("   ")[0];

    console.log(header.yellow);
    console.log(link.cyan);
    console.log("---------------------------\n");
  });
});
