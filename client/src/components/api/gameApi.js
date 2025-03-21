import { useEffect, useState } from "react";

import request from "../../utils/request";
import useAuth from "../../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/games';

// export default {

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

export const useGame = (gameId) => {
    const [game, setGame] = useState({});

    useEffect(() => {
        request.get(`${baseUrl}/${gameId}`)
            .then(setGame);
    }, [gameId]);

    return {
        game,
    }
};

export const useCreateGame = () => {

    const { request } = useAuth();

    const create = (gameData) => request.post(baseUrl, gameData);

    return {
        create,
    }
};

export const useEditGame = () => {

 
}

