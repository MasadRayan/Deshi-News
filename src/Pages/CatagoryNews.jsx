import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

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
           total {categoryNews.length} news
        </div>
    );
};

export default CatagoryNews;