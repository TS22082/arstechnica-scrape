const cheerio = require("cheerio");
const axios = require("axios");
const { showData } = require("./utitlities");
const { findBySubject, askToSearch } = require("./menus");

(async function () {
  let running = true;
  while (running) {
    try {
      const selection = await findBySubject();
      const { data } = await axios.get(`https://arstechnica.com/${selection}/`);
      const $ = cheerio.load(data);

      $("li.article").each((i, element) => {
        const header = $(element).find("a").text().split("   ")[0];
        const link = $(element).find("a.overlay").attr("href");
        showData(header, link);
      });

      running = await askToSearch();
    } catch (err) {
      console.log({ error: err });
    }
  }

  console.log("byyyeee");
  process.exit();
})();
