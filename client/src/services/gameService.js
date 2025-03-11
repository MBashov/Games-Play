const baseUrl = 'http://localhost:3030/jsonstore/games';

export default {
    async create(gameData) {
        const responce = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(gameData),
        });

        const result = await responce.json();

        return result;
    }
}