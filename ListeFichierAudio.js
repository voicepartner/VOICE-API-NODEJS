const axios = require('axios');

// L'URL de l'API où vous voulez envoyer la requête
const url = 'http://api.voicepartner.fr/v1/audios/YOUR_API_KEY';

axios.get(url)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Erreur lors de la requête:', error);
    });
