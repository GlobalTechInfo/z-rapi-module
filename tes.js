const axios = require('axios');

axios.get('https://textpro.me/create-blackpink-logo-style-online-1001.html', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
    'Connection': 'keep-alive'
  }
})
.then(response => {
  console.log('Response:', response.data);
})
.catch(error => {
  console.log('Error:', error);
});
