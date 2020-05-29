const cheerio = require("cheerio");
const axios = require("axios");
const { showData } = require("./utitlities");
const { findBySubject } = require("./menus");

(async function () {
  while (true) {
    try {
      const selection = await findBySubject();
      console.log(selection);

      const { data } = await axios.get(`https://arstechnica.com/${selection}/`);
      const $ = cheerio.load(data);

      $("li.article").each((i, element) => {
        const header = $(element).find("a").text().split("   ")[0];
        const link = $(element).find("a.overlay").attr("href");

        showData(header, link);
      });
    } catch (err) {
      console.log({ error: err });
    }
  }
})();
