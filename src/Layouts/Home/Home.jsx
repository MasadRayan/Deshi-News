import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <>
            <div className='container mx-auto'>
                <header>
                    <Header></Header>
                </header>
                <main>
                    <div className="left-navbar"></div>
                    <div className="main-content">
                        <Outlet></Outlet>
                    </div>
                    <div className="right-content"></div>
                </main>
                <footer>

                </footer>
            </div>
        </>
    );
};

export default Home;