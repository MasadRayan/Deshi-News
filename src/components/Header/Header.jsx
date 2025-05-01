import React from 'react';
import logo from "../../assets/logo.png"

const Header = () => {
    return (
        <div className='mt-10 flex justify-center items-center gap-4 flex-col'>
            <img className='max-w-[450px]' src={logo} alt="" />
            <p className='text-lg text-accent'>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;