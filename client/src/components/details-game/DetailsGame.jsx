import { Link, useParams, useNavigate } from "react-router";
import gameService from "../../services/gameService";
import { useEffect, useState } from "react";
import ShowComments from "../show-comments/ShowComments";
import CreateComments from "../create-comments/CreateComments";
import commentService from "../../services/commentService";

export default function DetailsGame({ email }) {
    const navigate = useNavigate();
    const { gameId } = useParams();
    const [game, setGame] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        gameService.getOne(gameId)
            .then(result => setGame(result));

        commentService.getAll(gameId)
            .then(result => setComments(result));


    }, [gameId]);

    const deleteGameHandler = async () => {
        const confirm = window.confirm(`Are you sure you want to delete ${game.title}`);

        if (!confirm) return;

        await gameService.delete(gameId);

        navigate('/games');
    }

    const showCommentsHandler = (comment) => {

        setComments(state => [...state, comment]);
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>

                {<ShowComments comments={comments} />}

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                <div className="buttons">
                    <Link to={`/games/${game._id}/edit`} className="button">Edit</Link>
                    <button onClick={deleteGameHandler} className="button">Delete</button>
                </div>
            </div>

            {<CreateComments
                email={email}
                gameId={gameId}
                onCreate={showCommentsHandler}
            />}

        </section>
    );
}