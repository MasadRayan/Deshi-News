import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <>
            <div className="card  w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-20 py-10 ">
                <div className="card-body">
                <h1 className="text-2xl mb-5 text-center font-bold">Login your account</h1>
                    <form className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn  btn-neutral mt-4">Login</button>
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