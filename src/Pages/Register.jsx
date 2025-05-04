import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/Authcontext';

const Register = () => {

    const { createUser, setUser, profileUpdate } = use(AuthContext);
    const [nameError, setNameError] = useState('');
    const nevigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setNameError('');

        if (name.length < 5) {
            setNameError("Name should be At least 5 characters");
            return;
        }
        else {
            setNameError('');
        }

        createUser(email, password)
            .then((result) => {

                const user = result.user;

                profileUpdate({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user,  displayName: name, photoURL: photo});
                        nevigate('/');
                    })
                    .catch((error) => {
                        console.log(error);
                        setUser(user);
                    })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });

    }

    return (
        <div className="card w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-10 pt-10 ">
            <div className="card-body">
                <h1 className="text-2xl mb-5 text-center font-bold">Register your account</h1>
                <form onSubmit={handleRegister} className="fieldset">
                    {/* name */}
                    <label className="label">Name</label>
                    <input
                        type="text"
                        name='name'
                        className="input"
                        placeholder="name"
                        required />

                    {
                        nameError && <p className='text-red-500 text-xs'>{nameError}</p>
                    }
                    {/* photo */}
                    <label className="label">Photo URL</label>
                    <input
                        type="text"
                        name='photo'
                        className="input"
                        placeholder="Photo Url"
                        required />
                    {/* email */}
                    <label className="label">Email</label>
                    <input
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
                    {/* button */}
                    <button type='submit' className="btn  btn-neutral mt-4">Register</button>
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