import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import gameService from "../../services/gameService";

export default function EditGame() {
    const navigate = useNavigate();
    const { gameId } = useParams();
    const [game, setGame] = useState({});

    useEffect(() => {
        gameService.getOne(gameId)
            .then(result => setGame(result));
    }, []);

    const formACtion = async (formData) => {
        const gameData = Object.fromEntries(formData);
        
        await gameService.edit(gameId, gameData);
        
        navigate(`/games/${gameId}/details`);

    }

    return (
        <section id="edit-page" className="auth">
            <form action={formACtion} id="edit">
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" defaultValue={game.title} />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" defaultValue={game.category} />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" defaultValue={game.maxLevel} />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={game.imageUrl} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={game.summary}></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" />

                </div>
            </form>
        </section>
    );
}