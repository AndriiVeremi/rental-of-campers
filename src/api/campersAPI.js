import axios from 'axios';

axios.defaults.baseURL = 'https://661a80a0125e9bb9f29c3861.mockapi.io';

export const getAllCampers = async () => {
    const data = await axios.get('/adverts/');
    return data;
};

