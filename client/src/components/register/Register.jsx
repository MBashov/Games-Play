import { use, useActionState, useContext } from "react";
import { useRegister } from "../api/authApi";
import { userContext } from "../../contexts/userContext";
import { useNavigate } from "react-router";

export default function Register() {

    const navigate = useNavigate();
    const { register } = useRegister();
    const { userLoginHandler } = useContext(userContext);

    const registerHandler = async (_, formData) => {
        const { email, password, rePassword } = Object.fromEntries(formData);

        if (password !== rePassword) {
            return console.log('Wrong password'); //TODO Add error handler  
        }

        const authData = await register(email, password);

        userLoginHandler(authData);

        navigate('/');
    }


    const [_, formAction, isPending] = useActionState(registerHandler, { email: '', password: '', rePassword: '' })

    return (
        <section id="register-page" className="content auth">
            <form action={formAction} id="register">
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com" />

                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="rePassword" id="rePassword" />

                    <input className="btn submit" type="submit" value="Register" disabled={isPending} />

                    <p className="field">
                        <span>If you already have profile click <a href="/login">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
}