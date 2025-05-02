import React from 'react';
import swimming from "../assets/swimming.png"
import classroom from "../assets/class.png"
import playground from "../assets/playground.png"
import background from "../assets/bg.png"

const Qzone = () => {
    return (
        <div>
            <div className='bg-base-200 rounded-xl p-4 mb-8'>
                <h2 className='text-lg font-semibold mb-4'>Q-Zone</h2>
                <div className=" flex flex-col gap-4 ">
                    <img src={swimming} alt="" />
                    <img src={classroom} alt="" />
                    <img src={playground} alt="" />
                </div>
            </div>
            <div>
                <img className='w-full' src={background} alt="" />
            </div>
        </div>
    );
};

export default Qzone;