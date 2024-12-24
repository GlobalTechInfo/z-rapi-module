const axios = require('axios');
const cheerio = require('cheerio');  // Install with 'npm install cheerio'

axios.get("https://textpro.me/create-blackpink-logo-style-online-1001.html")
  .then(response => {
    const $ = cheerio.load(response.data);
    // Scrape the required data from the page
    const result = $("selector-for-url").attr("href");  // Modify selector accordingly
    console.log(result);
  })
  .catch(error => {
    console.log('Error:', error);
  });
