const axios = require('axios');

// URL de l'API à laquelle effectuer la requête POST
const url = 'https://api.voicepartner.fr/v1/campaign/send';

// Les données à envoyer en JSON
const data = {
    apiKey: 'YOUR_API_KEY',
    tokenAudio: 'TOKEN_AUDIO',
    emailForNotification: 'email@example.com',
    phoneNumbers: '06xxxxxxxx'
    // ... autres paramètres si nécessaire
};

axios.post(url, data)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Erreur lors de la requête:', error);
    });
