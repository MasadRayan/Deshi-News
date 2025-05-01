import React from 'react';
import logo from "../../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='mt-10 flex justify-center items-center gap-4 flex-col'>
            <img className='px-2 lg:px-0 lg:max-w-[450px]' src={logo} alt="" />
            <p className='text-lg text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium'>{format(new Date(), "eeee, MMMM d, uuuu")}</p>
        </div>
    );
};

export default Header;