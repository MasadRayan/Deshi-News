import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/Authcontext';

const Login = () => {
    const [errorMassage, setErrorMassage] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef();

    const { signInUser, setUser, passwordReset } = use(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setErrorMassage('')

        signInUser(email, password)
            .then((result) => {

                const user = result.user;
                // console.log(user);
                setUser(user);
                navigate(`${location.state ? location.state : '/'}`)

            })
            .catch((error) => {
                const errorMessage = error.message;
                setErrorMassage(errorMessage)
            });
    }

    const handleForgetPass = () => {
        const email = emailRef.current.value;
        passwordReset(email)
            .then(() => {
                alert("Password reset email sent");
            })
            .catch((error) => {
                
                const errorMessage = error.message;
                setErrorMassage(errorMessage);
            });
    }

    return (
        <>
            <div className="card  w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-20 py-10 ">
                <div className="card-body">
                    <h1 className="text-2xl mb-5 text-center font-bold">Login your account</h1>
                    <form onSubmit={handleSubmit} className="fieldset">
                        {/* email */}
                        <label className="label">Email</label>
                        <input
                            ref={emailRef}
                            type="email"
                            name='email'
                            className="input"
                            placeholder="Email"
                            required />
                        {/* password */}
                        <label className="label">Password</label>
                        <input
                            type="password"
                            name='password'
                            className="input" placeholder="Password"
                            required />

                        {
                            errorMassage && <p className='text-red-500 text-xs'>{errorMassage}</p>
                        }
                        <div>
                            <a  onClick={handleForgetPass} className="link link-hover">Forgot password?</a>
                        </div>
                        <button type='submit' className="btn  btn-neutral mt-4">Login</button>
                        <p className='font-semibold mt-5 text-center'>
                            Dont’t Have An Account ? <Link
                                to={'/auth/register'} className='text-secondary'>Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;