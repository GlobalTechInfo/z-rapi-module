const zrapi = require("./src/index");

// Fetching data from Snaptik (likely to download or extract video)
zrapi.snaptik("https://vt.tiktok.com/khpq9t")
  .then(data => {
    console.log("Snaptik Data:", data);
  })
  .catch(e => {
    console.error("Error in Snaptik:", e);
  });

// Fetching data from Textpro (likely to apply some text effects on the video or URL)
zrapi.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html")
  .then(data => {
    // Assuming the response contains 'text' property, if not, you can log the whole data
    console.log("Textpro Data:", data);
  })
  .catch(e => {
    console.error("Error in Textpro:", e);
  });

// Fetching data from Photooxy (likely to apply photo effects)
zrapi.photooxy("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html")
  .then(data => {
    // Assuming the response contains 'text' or 'text2' property, log it or the entire response
    console.log("Photooxy Data:", data);
  })
  .catch(e => {
    console.error("Error in Photooxy:", e);
  });
