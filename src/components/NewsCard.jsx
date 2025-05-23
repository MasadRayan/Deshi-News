import React from 'react';
import { FaRegEye, FaStar } from "react-icons/fa";
import { IoMdShare } from 'react-icons/io';
import { MdBookmarkBorder } from 'react-icons/md';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
    const {
        id,
        title,
        author,
        thumbnail_url,
        details,
        total_view,
        rating,
    } = news;


    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="card bg-base-100 shadow-md rounded-xl  pb-4">
            {/* Author Info */}
            <div className="flex p-4 rounded-xl bg-base-200 items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt={author?.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="font-semibold">{author?.name}</p>
                        <p className="text-sm text-gray-500">{formatDate(author?.published_date)}</p>
                    </div>
                </div>
                <div className='flex gap-3 cursor-pointer'>
                    <MdBookmarkBorder className='hover:text-[#FF8C47]' size={24} />
                    <IoMdShare size={24}></IoMdShare>
                </div>
            </div>

            {/* Title */}
            <h2 className="font-bold text-lg px-4 mb-2">{title}</h2>

            {/* Image */}
            <img
                src={thumbnail_url}
                alt={title}
                className="w-full px-4 h-48 object-cover rounded-md mb-3"
            />

            {/* Details */}
            <p className="text-sm text-gray-700 px-3 mb-3">
                {details.length > 150 ? details.slice(0, 150) + "..." : details}
                <Link to={`/news-details/${id}`} className="font-semibold cursor-pointer text-[#FF8C47] hover:underline"> Read More</Link>
            </p>


            {/* Footer */}
            <div className="flex px-4 mt-2 items-center justify-between text-sm text-gray-600">
                {/* Rating */}
                <div className="flex items-center gap-1 text-orange-400">
                    {[...Array(rating.number)].map((_, idx) => (
                        <FaStar key={idx} />
                    ))}
                    <span className="text-black font-medium ml-1">{rating.number}.0</span>
                </div>

                {/* Views */}
                <div className="flex items-center gap-1">
                    <FaRegEye className="text-gray-500" />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
