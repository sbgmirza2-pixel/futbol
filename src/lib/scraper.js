// src/lib/scraper.js
import axios from "axios";
import * as cheerio from "cheerio";

export async function getAgendaData() {
  try {
    const { data } = await axios.get("https://futbollibrefullhd.org/", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      timeout: 8000,
    });

    const $ = cheerio.load(data);
    const matches = [];

    $(".cards-container .card").each((index, element) => {
      const title = $(element).find("h3").text().trim();
      const description = $(element).find("p").text().trim();
      let image = $(element).find("img").attr("src");
      const watchLink = $(element).find("a.btn-watch").attr("href");

      if (image && !image.startsWith("http")) {
        image = `https://futbollibrefullhd.org${image}`;
      }

      if (title) {
        matches.push({
          id: index,
          title,
          description,
          image,
          watchLink,
        });
      }
    });

    return matches;
  } catch (error) {
    console.error("Scraping error:", error.message);
    return [];
  }
}