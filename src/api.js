const API_URL = 'https://konkursas.kitm.lt/backend/1368990/api/v1/places';

const getStuff = async () => {
    const response = await fetch(API_URL)
        .then(data => data.data);
    if (!response.ok) {
        throw new Error('Failed to fetch');
    }
    return response.json();
};

export default getStuff