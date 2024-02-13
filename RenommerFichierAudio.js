const axios = require('axios');

// L'URL de l'API pour renommer un fichier audio
const url = 'https://api.voicepartner.fr/v1/audio-file/rename';

// Les données à envoyer en JSON
const data = {
    apiKey: 'YOUR_API_KEY',
    tokenAudio: 'TOKEN_DU_FICHIER_AUDIO',
    filename: 'Nom du fichier'
};

axios.post(url, data)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Erreur lors de la requête:', error);
    });
