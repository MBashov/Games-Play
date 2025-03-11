import { useEffect, useState } from "react";
import gameService from "../../services/gameService";
import Game from "./game/Game";

export default function Catalog() {

    const [games, setGames] = useState([]);
    useEffect(() => {
        gameService.getAll()
            .then(result => {
                setGames(result);
            })
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            
            {games.length > 0
                ? games.map(game => <Game key={game._id} game={game} />)
                : <h3 className="no-articles">No articles yet</h3>
            }
        </section>
    );
}