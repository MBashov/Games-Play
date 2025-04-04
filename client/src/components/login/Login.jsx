import { useActionState, useContext } from "react";
import { Link, useNavigate } from "react-router";

import { userContext } from "../../contexts/userContext";
import { useLogin } from "../../api/authApi";
import { toast } from "react-toastify";

export default function Login() {

    const navigate = useNavigate();
    const { userLoginHandler } = useContext(userContext);
    const { login } = useLogin();

    const loginHandler = async (_, formData) => {
        const { email, password } = Object.fromEntries(formData);

        try {
            const authData = await login(email, password);
            userLoginHandler(authData);
            navigate('/games');
        } catch (err) {
            toast.error(err.message);
        }

    }

    const [_, formAction, isPending] = useActionState(loginHandler, { email: '', password: '' })

    return (
        <section id="login-page" className="auth">
            <form action={formAction} id="login">

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" />
                    <input type="submit" className="btn submit" value="Login" disabled={isPending} />
                    <p className="field">
                        <span>If you don't have profile click <Link to="/register">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}