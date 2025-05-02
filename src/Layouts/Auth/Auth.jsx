import React from 'react';
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router';

const Auth = () => {
    return (
        <div className=' min-h-screen container mx-auto'>
            <header className=''>
                <Navbar></Navbar>
            </header>
            <main>
            <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Auth;