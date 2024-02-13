const axios = require('axios');

// L'URL de l'API pour envoyer le message vocal
const url = 'http://api.voicepartner.fr/v1/tts/send';

// Les données à envoyer en JSON
const data = {
    apiKey: 'v9W2BiAxN-zbsCC-1b9jWE7k-5FgkMm',
    phoneNumbers: '0651923982',
    text: 'Mon premier test'
    // ... autres paramètres si nécessaire
};

axios.post(url, data)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Erreur lors de la requête:', error);
    });
