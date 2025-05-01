import React from 'react';
import Marquee from 'react-fast-marquee';

const LeatestNews = () => {
    return (
        <div className='mt-8 flex p-3 items-center gap-4 bg-base-300'>
            <p className='text-lg text-base-100 px-3 py-2 bg-secondary'>Latest</p>
            <Marquee className='flex gap-5' pauseOnHover={true} speed={70}>
                <p className='font-semibold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, necessitatibus.</p>
                <p className='font-semibold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, necessitatibus.</p>
                
            </Marquee>
        </div>
    );
};

export default LeatestNews;