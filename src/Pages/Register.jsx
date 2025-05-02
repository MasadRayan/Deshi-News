import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="card w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-10 pt-10 ">
        <div className="card-body">
        <h1 className="text-2xl mb-5 text-center font-bold">Register your account</h1>
            <form className="fieldset">
                <label className="label">Name</label>
                <input type="text" className="input" placeholder="name" />
                <label className="label">Photo URL</label>
                <input type="text" className="input" placeholder="Photo Url" />
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />
                <button className="btn  btn-neutral mt-4">Register</button>
                <p className='font-semibold mt-5 text-center'>
                Already Have An Account ? <Link 
                to={'/auth/login'} className='text-secondary'>Login</Link>
                </p>
            </form>
        </div>
    </div>
    );
};

export default Register;