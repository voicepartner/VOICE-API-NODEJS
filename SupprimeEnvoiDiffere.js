const axios = require('axios');

// L'URL de l'API pour annuler la campagne
const apiKey = 'YOUR_API_KEY';
const campaignId = 'CAMPAIGN_ID';
const url = `https://api.voicepartner.fr/v1/campaign/cancel/${apiKey}/${campaignId}`;

axios.delete(url)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Erreur lors de la requête:', error);
    });
