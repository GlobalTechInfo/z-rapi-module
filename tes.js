const zrapi = require("./src/index");

// Fetching data from Snaptik (likely to download or extract video)
zrapi.snaptik("https://vt.tiktok.com/khpq9t")
  .then(data => console.log(data))
  .catch(e => console.error(e));

// Fetching data from Textpro (likely to apply some text effects on the video or URL)
zrapi.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html")
  ["text"]
  .then(data => console.log(data))
  .catch(e => console.error(e));

// Fetching data from Photooxy (likely to apply photo effects)
zrapi.photooxy("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html")
  ["text, text2"]
  .then(data => console.log(data))
  .catch(e => console.error(e));
