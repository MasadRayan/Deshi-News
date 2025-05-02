import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router';
import LeatestNews from '../../components/LeatestNews';
import Navbar from '../../components/Navbar';
import LeftAside from '../../components/HomeLayout/LeftAside';
import RightAside from '../../components/HomeLayout/RightAside';

const Home = () => {
    return (
        <>
            <div className='container mx-auto'>
                <header>
                    <Header></Header>
                    <section className='w-11/12 mx-auto'>
                        <LeatestNews></LeatestNews>
                    </section>
                    <nav className='w-11/12 mx-auto'>
                        <Navbar></Navbar>
                    </nav>
                </header>
                <main className='w-11/12 mx-auto grid grid-cols-12 lg:mt-20'>
                    <aside className='col-span-3 sticky h-fit top-0'>
                        <LeftAside></LeftAside>
                    </aside>
                    <div className="main-content col-span-6 w-11/12 mx-auto">
                        <Outlet></Outlet>
                    </div>
                    <aside className='col-span-3 sticky h-fit top-0'>
                        <RightAside></RightAside>
                    </aside>
                </main>
                <footer>

                </footer>
            </div>
        </>
    );
};

export default Home;