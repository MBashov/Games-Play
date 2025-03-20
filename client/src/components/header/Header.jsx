import { useContext } from "react";
import { Link } from "react-router";
import { userContext } from "../../contexts/userContext";

export default function Header() {

    const { email } = useContext(userContext);

    return (
        <header>
            <h1><a className="home" href="/">GamesPlay</a></h1>
            <nav>
                <Link to="/games">All games</Link>
                {email
                    ? (
                        <div id="user">
                            <Link to="/games/create">Create Game</Link>
                            <Link to="/logout">Logout</Link>
                            {email}
                        </div>
                    )
                    : (
                        <div id="guest">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                    )
                }
            </nav>
        </header>
    );
}