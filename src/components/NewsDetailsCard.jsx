import React from 'react';
import { PiArrowLeftBold } from 'react-icons/pi';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {

    const {
        id,
        title,
        author,
        thumbnail_url,
        details,
        category_id
    } = news;


    return (
        <div className='p-5 border-1 border-base-300 rounded-2xl space-y-10'>
            <img className='w-full object-cover max-h-[450px] rounded-2xl'  src={thumbnail_url} alt="" />
            <h2 className='text-3xl w-8/12 font-bold'>{title}</h2>
            <p className='w-11/12 mx-auto text-xl leading-8 text-[#706F6F]'>{details}</p>
            <Link 
            to={`/category/${category_id}`}
            className='btn btn-secondary'>
            <PiArrowLeftBold size={23}></PiArrowLeftBold>
            All news in this category
            </Link>
        </div>
    );
};

export default NewsDetailsCard;