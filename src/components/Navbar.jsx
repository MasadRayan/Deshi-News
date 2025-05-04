import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userlogo from "../assets/user.png"
import { AuthContext } from '../Provider/Authcontext';

const Navbar = () => {

    const {user, removeUser} = use(AuthContext)

    const links = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/career'}>Career</NavLink>
    </>

    const handleRemoveUser = () => {
        removeUser()
        .then(() => {
            
          }).catch((error) => {
            console.log(error);
          });
    }
    return (
        <div className="navbar py-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-3">
                        {links}
                    </ul>
                </div>
                <div className='text-xl font-bold'>
                    {user && <p>{user.displayName}</p>}
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 text-accent text-lg">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
            <img className='w-13 rounded-full' src={user? user.photoURL : userlogo} alt="" />
            {
                user ? <button onClick={handleRemoveUser} className='btn btn-primary px-10 text-lg'>Log Out</button> : <Link to={'/auth/login'} className='btn btn-primary px-10 text-lg'>Login</Link>
            }
            
            </div>
        </div>
    );
};

export default Navbar;



