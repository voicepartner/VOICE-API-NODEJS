const axios = require('axios');

// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = 'YOUR_API_KEY';

// The URL of the API with the API key appended
const url = `https://api.voicepartner.fr/v1/me/${apiKey}`;

axios.get(url)
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    });
