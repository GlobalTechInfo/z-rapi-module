const zrapi = require("./src/index.js");

//TextPro
zrapi
  .textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    "teks",
  ])
  .then((data) => {
    console.log("TextPro Response:", data);
  })
  .catch((err) => {
    console.error("TextPro Error:", err);
  });

//TextPro with 2 text
zrapi
  .textpro(
    "https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html",
    ["teks", "teks 2"]
  )
  .then((data) => {
    console.log("TextPro with 2 texts Response:", data);
  })
  .catch((err) => {
    console.error("TextPro with 2 texts Error:", err);
  });

//Photooxy
zrapi
  .photooxy(
    "https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html",
    ["teks"]
  )
  .then((data) => {
    console.log("Photooxy Response:", data);
  })
  .catch((err) => {
    console.error("Photooxy Error:", err);
  });

//Photooxy with 2 text
zrapi
  .photooxy(
    "https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
    ["teks", "Teks 2"]
  )
  .then((data) => {
    console.log("Photooxy with 2 texts Response:", data);
  })
  .catch((err) => {
    console.error("Photooxy with 2 texts Error:", err);
  });
