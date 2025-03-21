import { Link, useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";

import ShowComments from "../show-comments/ShowComments";
import CreateComments from "../create-comments/CreateComments";
import { useDeleteGame, useGame } from "../api/gameApi";
import useAuth from "../../hooks/useAuth";

export default function DetailsGame() {

    const navigate = useNavigate();
    const { email, _id: userId } = useAuth();
    const [comments, setComments] = useState([]);
    const { gameId } = useParams();
    const { game } = useGame(gameId);
    const { deleteGame } = useDeleteGame();

    // useEffect(() => {
    //     commentService.getAll(gameId)
    //         .then(result => setComments(result));


    // }, [gameId]);

    console.log(userId);
    console.log(game._ownerId);

    const isOwner = userId === game._ownerId;


    const deleteGameHandler = async () => {
        const confirm = window.confirm(`Are you sure you want to delete ${game.title}`);

        if (!confirm) return;

        await deleteGame(gameId);

        navigate('/games');
    }

    const showCommentsHandler = (newComment) => {

        setComments(state => [...state, newComment]);
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

                {isOwner &&
                    <div className="buttons">
                        <Link to={`/games/${game._id}/edit`} className="button">Edit</Link>
                        <button onClick={deleteGameHandler} className="button">Delete</button>
                    </div>
                }
            </div>

            {<CreateComments
                email={email}
                gameId={gameId}
                onCreate={showCommentsHandler}
            />}

        </section>
    );
}