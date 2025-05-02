import React from 'react';
import { FaFacebook, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='text-lg font-semibold mb-4'>Find Us On</h2>
            <div>
                <div className="join w-full join-vertical">
                    <button className="btn justify-start py-6 join-item"><FaFacebook size={20}></FaFacebook> Facebook</button>
                    <button className="btn justify-start py-6 join-item"> <FaTwitterSquare size={20}></FaTwitterSquare> Twitter</button>
                    <button className="btn justify-start py-6 join-item"> <FaInstagram size={20}></FaInstagram> Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;
