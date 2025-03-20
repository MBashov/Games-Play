import { useActionState } from "react";
import { Link, useNavigate } from "react-router";

import { useLogin } from '../api/authApi'

export default function Login({ onLogin }) {

    const navigate = useNavigate();
    const { login } = useLogin();

    const loginHandler = async (_, formData) => {
        const {email , password} = Object.fromEntries(formData);

        const authData = await login(email, password);

        onLogin(authData);

        // navigate('/games');
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