import { useContext, useEffect, useState } from "react";
import { userContext } from "../../contexts/userContext";

import request from "../../utils/request";

const baseUrl = 'http://localhost:3030/data/games';

// export default {

//     getOne(gameId) {
//         return request.get(`${baseUrl}/${gameId}`);
//     },



//     edit(gameId, gameData) {
//         return request.put(`${baseUrl}/${gameId}`, { ...gameData, _id: gameId });
//     },

//     delete(gameId) {
//         return request.del(`${baseUrl}/${gameId}`);
//     }
// }

export const useGames = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        request.get(baseUrl)
            .then(setGames);

    }, []);
    
    return {
        games,
    };
};

export const useCreateGame = () => {

    const { accessToken } = useContext(userContext);

    const options = {
        headers: {
            'X-Authorization': accessToken
        },
    }

    const create = (gameData) => request.post(baseUrl, gameData, options);

    return {
        create,
    }
};

