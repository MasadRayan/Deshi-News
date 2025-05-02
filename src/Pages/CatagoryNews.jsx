import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CatagoryNews = () => {

    const [categoryNews, setCategoryNews] = useState([]);
    const { id } = useParams();
    const data = useLoaderData();

    useEffect(() => {
        if (id === "0") {
            setCategoryNews(data);
            return;
        } else if (id == "1") {
            const filterData = data.filter(news => news.others?.is_today_pick == true);
            setCategoryNews(filterData);
        } else {
            const filterData = data.filter(news => news.category_id == id);
            setCategoryNews(filterData);
        }
    }, [data, id]);


    return (
        <div>
           <p className='text-xl font-bold mb-5'>
           Total <span className='text-secondary'>{categoryNews.length} </span> news found
           </p>
           <div className='grid grid-cols-1 gap-5 '>
            {
                categoryNews.map(news => <NewsCard
                    key={news.id}
                    news={news}
                    ></NewsCard>)
            }
           </div>
        </div>
    );
};

export default CatagoryNews;