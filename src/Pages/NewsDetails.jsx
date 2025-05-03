import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import RightAside from '../components/HomeLayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { ScrollRestoration, useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState({}) ;
    
    useEffect(() => {

        const selectedNews = data.find(singleNews => singleNews.id == id);
        setNews(selectedNews);

    },[data, id]);


    return (
        <>
        <div className='container mx-auto'>
            <header>
                <Header></Header>
            </header>
            <main className='grid grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <h2 className='text-xl font-bold mb-5'>Deshi News</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <section  className='col-span-3'>
                    <RightAside></RightAside>
                </section>
            </main>
        </div>
        <ScrollRestoration></ScrollRestoration>
        
        </>
    );
};

export default NewsDetails;